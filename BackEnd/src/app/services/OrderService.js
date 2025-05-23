// const orderRepository = require('../repository/OrderRepository');
const dayjs = require('dayjs');
const crypto = require('crypto');

const OrderStatus = require('../model/OrderStatus');
const OrderStatusDetails = require('../model/OrderStatusDetails');
const UserRepository = require('../repository/UserRepository');
const ProductVariantRepository = require('../repository/ProductVariantRepository');
const OrderRepository = require('../repository/OrderRepository');
const orderDetailsRepository = require('../repository/OrderDetailsRepository');
const addressRepository = require('../repository/AddressRepository');
const orderStatusRepository = require('../repository/OrderStatusRepository');
const orderStatusDetailsRepository = require('../repository/OrderStatusDetailsRepository');
const paymentMethodRepository = require('../repository/PaymentMethodRepository');
const paymentRepository = require('../repository/PaymentRepository');
const userRepository = require("../repository/UserRepository");
const accountRepository = require("../repository/AccountRepository");
const productVariantRepository = require('../repository/ProductVariantRepository');
const couponRepository = require('../repository/CouponRepository');
const roleRepository = require('../repository/RoleRepository');
const mailer = require("nodemailer");
const bcrypt = require("bcrypt");
const orderRepository = require("../repository/OrderRepository");
const cartRepository = require("../repository/CartRepository");

class OrderService {

  //create an order
  async createOrder(req, res) {
    const { user_id, orderStatus_id, cart } = req.body;

    // Check if user exists
    const user = await UserRepository.getUserById(user_id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Check if order status exists
    const orderStatus = await OrderRepository.findOrderStatusById(orderStatus_id);
    if (!orderStatus) {
      return res.status(404).json({
        success: false,
        message: 'Order status not found',
      });
    }

    // Create the order
    const newOrder = {
      user_id,
      status_id: orderStatus._id,
      tax: 10, // Set your default tax value or calculate dynamically
      shippingFee: 20, // Set your default shipping fee or calculate dynamically
    };

    // Save the order
    const savedOrder = await OrderRepository.createOrder(newOrder);

    // Get all statuses (Pending, Confirmed, Shipping, Delivered, Cancel)
    const statuses = await OrderStatus.find({
      status: { $in: ['Pending', 'Confirmed', 'Shipping', 'Delivered'] }
    });

    // Create the OrderStatusDetails records for the new order
    const orderStatusDetailsPromises = statuses.map(status => {
      const isCheck = status.status === 'Pending';  // Set is_check to true for "Pending"
      const createdAt = isCheck ? new Date() : null;  // Set current date for "Pending", null for others

      return OrderStatusDetails.create({
        order_id: savedOrder._id,
        status_id: status._id,
        createdAt: createdAt,
        is_check: isCheck,
      });
    });

    // Wait for all order status details to be saved
    await Promise.all(orderStatusDetailsPromises);



    // Process the cart items
    const orderDetailsPromises = cart.map(async (item) => {
      const { product_variant_id, quantity } = item;

      // Check if the product variant exists
      const productVariant = await ProductVariantRepository.getProductVariantById(product_variant_id);
      if (!productVariant) {
        return res.status(404).json({
          success: false,
          message: `Product variant with ID ${product_variant_id} not found`,
        });
      }

      // Prepare the order details data
      const newOrderDetails = {
        order_id: savedOrder._id,
        product_variant_id: productVariant._id,
        quantity: quantity || 1, // Default to 1 if quantity is not provided
      };

      // Create the order details
      await OrderRepository.createOrderDetails(newOrderDetails);
    });

    // Wait for all order details to be saved
    await Promise.all(orderDetailsPromises);

    // Fetch order details and include them in the response
    const orderDetails = await OrderRepository.getOrderDetailsByOrderId(savedOrder._id);

    // Send response back with the created order and order details
    return res.status(201).json({
      status: true,
      message: 'Order created successfully',
      order: {
        ...savedOrder.toObject(), // Return order properties
        order_details: orderDetails, // Include the created order details
      },
    });
  }

  // Get all orders
  async getAllOrders(req, res) {
    try {
      const orders = await OrderRepository.getAllOrders();
      return res.status(200).json({
        status: true,
        data: orders,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        msg: 'An error occurred while fetching orders',
        error: error.message,
      });
    }
  }

  async updateOrderStatusDetails(req, res) {
    const { orderId } = req.params;
    const { statusId } = req.body;

    // Check if the order exists
    const orderExists = await OrderRepository.doesOrderExist(orderId);
    if (!orderExists) {
      return res.status(404).json({
        status: false,
        message: 'Order not found',
      });
    }

    // Check if the status exists
    const statusExists = await OrderRepository.doesStatusExist(statusId);
    if (!statusExists) {
      return res.status(404).json({
        status: false,
        message: 'Order status not found',
      });
    }

    try {
      const orderStatus = await orderStatusRepository.getOrderStatusById(statusId);
      const orderStatusName = orderStatus.status;

      // update current status for order
      const orderUpdated = await OrderRepository.updateOrderById(orderId, { status: orderStatusName });
      if (!orderUpdated.acknowledged) throw new Error('Update order status failed !');

      // Update or create the OrderStatusDetails
      const updatedStatusDetails = await OrderRepository.upsertOrderStatusDetails(orderId, statusId);

      const newUpdatedStatusDetails = await orderStatusDetailsRepository.getOrderStatusByOrderIdAndStatusId(orderId, statusId);

      const newOrderUpdated = await OrderRepository.getAllOrders();

      return res.status(200).json({
        status: true,
        message: 'Order status updated successfully',
        data: newUpdatedStatusDetails,
        newOrderUpdated
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'An error occurred while updating order status',
        error: error.message,
      });
    }
  }

  async getOrdersByUserId(userId) {
    try {
      return await OrderRepository.getOrdersByUserId(userId);
    } catch (error) {
      throw new Error('Error fetching orders');
    }
  }
  async getOrderDetailsByOrderId(orderId) {
    try {
      return await OrderRepository.getOrderDetailsByOrderId(orderId);
    } catch (error) {
      throw new Error('Error fetching order details');
    }
  }

  getUserOrder = async (req, res) => {
    const { user_id } = req.query;
    try {
      const userOrder = await OrderRepository.getOrderByUserAndDateCreatedIsNull(user_id);
      if (!userOrder) throw new Error('Load user order failed !');

      const order_id = userOrder._id;
      const userOrderDetails = await orderDetailsRepository.getOrderDetailsByOrderId(order_id);
      if (userOrderDetails.length === 0) throw new Error('Load user order failed !');

      const userShippingAddress = await addressRepository.getAddressesByUserId(user_id);
      if (userShippingAddress === 0) throw new Error('Load user address failed !');

      const userData = await userRepository.getUserById(user_id);
      const email = userData.email;

      return res.status(200).json({
        status: true,
        dataOrderDetails: userOrderDetails,
        dataOrder: userOrder,
        dataShippingAddress: userShippingAddress,
        email,
        msg: 'Load user order successfully !',
      })

    } catch (e) {
      return res.status(404).json({
        status: false,
        msg: e.message,
      })
    }
  }

  placeOrder = async (req, res) => {
    const { user_id, totalBill, address_id, payment_method_name, products, coupon_id, use_point } = req.body;
    const error = req.flash('error');
    try {
      if (error.length !== 0) throw new Error(error[0]);
      
      // add coupon if exist
      if (coupon_id) {
        const coupon = await couponRepository.getCouponById(coupon_id);
        if (!coupon) throw new Error('Coupon not found');
        if (coupon.usedCount >= coupon.maxUsage) throw new Error('Coupon usage limit reached!');
        // Tăng số lượt đã dùng lên 1
        await couponRepository.updateCoupon(coupon_id, { usedCount: coupon.usedCount + 1 });
      }

      const newOrderData = {
        user_id, address_id, status: 'Pending',
        createdAt: Date.now(), updatedAt: Date.now()
      }
      // update order
      const orderUpdated = await OrderRepository.findOneOrderAndUpdate(newOrderData);
      if (!orderUpdated) throw new Error('Order not found !');
      const order_id = orderUpdated._id;

      // create status
      const orderStatusDetailsData = [
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Pending'))._id,
          createdAt: Date.now(),
          is_check: true
        },
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Confirmed'))._id,
        },
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Shipping'))._id,
        },
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Delivered'))._id,
        },
      ]
      const orderStatusDetails = await orderStatusDetailsRepository.insertOrderStatusDetails(orderStatusDetailsData);
      if (orderStatusDetails.length === 0) throw new Error('Add to order failed !');

      // get payment method
      const payment_method = await paymentMethodRepository.getPaymentMethodByName(payment_method_name);
      if (!payment_method) throw new Error('Payment method not found !');
      const payment_method_id = await payment_method._id;

      // add payment
      const paymentData = {
        order_id, payment_method_id, total_money: totalBill
      }
      const paymentAdd = await paymentRepository.insertPayment(paymentData);
      if (paymentAdd.length === 0) throw new Error('Add payment failed !');

      // reduce product quantity
      for (const p of products) {
        const purchase_quantity = p.quantity;
        const product_variant_id = p.product_variant_id._id;
        const product_variant_stock_quantity = p.product_variant_id.variant_quantity;
        const remaining_stock_quantity = product_variant_stock_quantity - purchase_quantity;
        const productVariantUpdated = await productVariantRepository.updateProductVariantById(product_variant_id, { variant_quantity: remaining_stock_quantity });
        if (!productVariantUpdated) throw new Error('Update productVariant failed !');
      }

      // loyal program
      const loyal_point = Math.round(Number(totalBill) * 10 / 100);
      const userUpdatePointData = await userRepository.getUserById(user_id);
      const user_point = userUpdatePointData.point || 0;
      let result_loyal_point = user_point + loyal_point;

      const userUpdatedPoint = await userRepository.updateUserById({ _id: user_id, point: result_loyal_point });
      if (!userUpdatedPoint.acknowledged) throw new Error('Update user point failed !');

      // send invoice
      return this.sendMailConfirmOrder(req, res)
        .then(() => {
          return res.status(200).json({
            status: true,
            msg: 'Please check your email !'
          })
        })
        .catch(e => {
          throw new Error(e.message);
        })

    } catch (e) {
      return res.status(400).json({
        status: false,
        msg: e.message,
      })
    }
  }

  placeOrderNoLogin = async (req, res) => {
    const { totalBill, userInfo, payment_method_name, email, products, tax, shippingFee, cartList } = req.body;
    const error = req.flash('error');
    const fullName = userInfo.fullName;
    const address = userInfo.address;

    let user_id = '';
    let address_default = false;
    let send_mail_account = false;
    let randomPassword = '';

    try {
      if (error.length !== 0) throw new Error(error[0]);
      // check user exist
      const userByEmail = await userRepository.getUserByEmail(email);
      if (!userByEmail) {
          address_default = true;
          send_mail_account = true;

          const newUserData = {
              fullName: userInfo.fullName,
              email
          }

          const role = await roleRepository.getRoleByRoleName('Customer');
          const role_id = role._id;

          const userAddedData = await userRepository.insertUserRegister(newUserData);
          if (userAddedData.length === 0) throw new Error('Add user failed !');
          user_id = userAddedData[0]._id;

          // const hashPassword = await bcrypt.hash(email, 10);
          // Sinh mật khẩu random
          randomPassword = crypto.randomBytes(6).toString('hex');
          const hashPassword = await bcrypt.hash(randomPassword, 10);

          const newAccountData = {
              user_id, role_id,
              password: hashPassword
          }
          const accountAddedData = await accountRepository.insertAccountRegister(newAccountData);
          if (accountAddedData.length === 0) throw new Error('Add account failed !');
      } else {
          user_id = userByEmail._id;
      }
      const phone_number = userInfo.phone_number; // lấy từ userInfo gửi lên từ frontend
      
      // add new address
      const addressAddData = {
        user_id, fullName, address, phone_number, is_default: address_default
      }
      const addressAdded = await addressRepository.insertAddress(addressAddData);
      if (addressAdded.length === 0) throw new Error('Add address failed !');
      const address_id = addressAdded[0]._id;

      // add order to db
      const orderData = {
        user_id, tax, shippingFee, createdAt: null, updatedAt: null, status: ''
      }
      let orderDetailsData = [];
      const orderAddData = await OrderRepository.addCartToOrder(orderData);
      if (orderAddData.length === 0) throw new Error('Add to order failed !');
      const add_order_id = orderAddData[0]._id;

      for (const item of cartList) {
        orderDetailsData.push({
          order_id: add_order_id,
          product_variant_id: item.product_variant_id,
          quantity: item.quantity
        })
      }

      const orderDetailsAdd = await orderDetailsRepository.insertOrderDetailsFromCart(orderDetailsData);
      if (orderDetailsAdd.length === 0) throw new Error('Add to order failed !');

      const deletedCartItem = await cartRepository.deleteCartByUserId(user_id);
      if (!deletedCartItem.acknowledged) throw new Error('Error in add to order !');

      // update order
      const newOrderData = {
        user_id, address_id, status: 'Pending',
        createdAt: Date.now(), updatedAt: Date.now()
      }

      const orderUpdated = await OrderRepository.findOneOrderAndUpdate(newOrderData);
      if (!orderUpdated) throw new Error('Order not found !');
      const order_id = orderUpdated._id;

      // create status
      const orderStatusDetailsData = [
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Pending'))._id,
          createdAt: Date.now(),
          is_check: true
        },
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Confirmed'))._id,
        },
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Shipping'))._id,
        },
        {
          order_id,
          status_id: (await orderStatusRepository.getOrderStatusByName('Delivered'))._id,
        },
      ]
      const orderStatusDetails = await orderStatusDetailsRepository.insertOrderStatusDetails(orderStatusDetailsData);
      if (orderStatusDetails.length === 0) throw new Error('Add to order failed !');

      // get payment method
      const payment_method = await paymentMethodRepository.getPaymentMethodByName(payment_method_name);
      if (!payment_method) throw new Error('Payment method not found !');
      const payment_method_id = await payment_method._id;

      // add payment
      const paymentData = {
        order_id, payment_method_id, total_money: totalBill
      }
      const paymentAdd = await paymentRepository.insertPayment(paymentData);
      if (paymentAdd.length === 0) throw new Error('Add payment failed !');

      // reduce product quantity
      for (const p of products) {
        const purchase_quantity = p.quantity;
        const product_variant_id = p.product_variant_id._id;
        const product_variant_stock_quantity = p.product_variant_id.variant_quantity;
        const remaining_stock_quantity = product_variant_stock_quantity - purchase_quantity;
        const productVariantUpdated = await productVariantRepository.updateProductVariantById(product_variant_id, { variant_quantity: remaining_stock_quantity });
        if (!productVariantUpdated) throw new Error('Update productVariant failed !');
      }

      // loyal program
      const loyal_point = Math.round(Number(totalBill) * 5 / 100);
      const userUpdatePointData = await userRepository.getUserById(user_id);
      const user_point = userUpdatePointData.point;
      let result_loyal_point = user_point + loyal_point;

      const userUpdatedPoint = await userRepository.updateUserById({ _id: user_id, point: result_loyal_point });
      if (!userUpdatedPoint.acknowledged) throw new Error('Update user point failed !');

      // send invoice
      return this.sendMailConfirmOrder(req, res, send_mail_account, randomPassword)
        .then(() => {
          return res.status(200).json({
            status: true,
            msg: 'Please check your email !'
          })
        })
        .catch(e => {
          console.error(e);
          throw new Error(e.message);
        })

    } catch (e) {
      return res.status(400).json({
        status: false,
        msg: e.message,
      })
    }
  }

  sendMailConfirmOrder = async (req, res, send_mail_account = true, password = '') => {
    const { email, products } = req.body;

    try {
      const transporter = mailer.createTransport({
        host: process.env.MAIL_SERVER,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
      });

      let rows = products.map((item, index) => `
                <tr>
                    <td style="border:1px solid #ccc;">${index + 1}</td>
                    <td style="border:1px solid #ccc;">${item.product_variant_id.product_name}</td>
                    <td style="border:1px solid #ccc;">${item.product_variant_id.product_color}</td>
                    <td style="border:1px solid #ccc;">${item.quantity}</td>
                    <td style="border:1px solid #ccc;">$${item.quantity * item.product_variant_id.retail_price}</td>
                </tr>
            `).join('');

      // if (send_mail_account) {
      //   rows += `
        
      //               <br/>
      //               <p><b>Your account has been created!</b></p>
      //               <p>Email: ${email}</p>
      //               <p>Password: <b>${password}</b></p>
      //               <p>Please login and change your password.</p>
      //           `
      // }

      const timestamp = Date.now();
      const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Ho_Chi_Minh'
      }).format(timestamp);

      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: 'Email Order Confirmation',
        html: `
              <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
                <h2>Order Confirmation - ${formattedDate}</h2>

                 ${
                    send_mail_account
                      ? `
                        <div style="background-color: #f0f8ff; padding: 15px 20px; border: 1px solid #cce5ff; border-radius: 6px; margin-bottom: 20px;">
                          <p style="margin: 0 0 8px;"><strong>Your account has been created successfully!</strong></p>
                          <p style="margin: 0 0 4px;">Email: <strong>${email}</strong></p>
                          <p style="margin: 0 0 4px;">Password: <strong>${password}</strong></p>
                          <p style="margin: 8px 0 0;">Please <a href="http://localhost:5000/" target="_blank" style="color: #007bff; text-decoration: none;">login</a> and change your password as soon as possible.</p>
                        </div>
                      `
                      : ''
                }

                <table style="
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-size: 14px;
                    color: #333;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                ">
                  <thead style="background-color: #f8f8f8;">
                    <tr>
                      <th style="padding: 12px; border-bottom: 1px solid #ddd; text-align: left;">#</th>
                      <th style="padding: 12px; border-bottom: 1px solid #ddd; text-align: left;">Name</th>
                      <th style="padding: 12px; border-bottom: 1px solid #ddd; text-align: left;">Color</th>
                      <th style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">Quantity</th>
                      <th style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows}
                  </tbody>
                </table>

                <p style="margin-top: 24px; font-size: 15px;">
                  Thank you very much for your purchase! We truly appreciate your trust in our store.
                </p>
                <p style="margin: 0; font-size: 14px;">
                  If you have any questions, feel free to reply to this email or contact our support team.
                </p>
                <p style="margin-top: 12px; font-size: 14px;">Best regards,<br><strong>Your Store Team</strong></p>
              </div>
            `,
      }
      await transporter.sendMail(mailOptions);

    } catch (e) {
      return res.status(400).json({
        status: false,
        msg: e.message
      })
    }
  }

  getOrderStatusByOrderId = async (req, res) => {
    const { order_id } = req.params;
    try {
      const orderStatusDetails = await orderStatusDetailsRepository.getOrderStatusByOrderId(order_id);
      return res.status(200).json({
        status: true,
        data: orderStatusDetails,
        msg: 'Load order status successfully !'
      })
    } catch (e) {
      return res.status(400).json({
        status: false,
        msg: e.message,
      })
    }
  }

  placeOrderZaloPay = async (req, res) => {
    const {items, description, amount } = req.body;
    const currentDate = dayjs();
    const app_time = currentDate.valueOf();
    const tranId = currentDate.format('YYMMDD');
    const app_trans_id = `${tranId}_${app_time}`;
    const key1 = 'PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL';

    const data = {
      "amount": amount,
      "app_id": 2553,
      "app_time": app_time,
      "app_trans_id": app_trans_id,
      "app_user": "demo",
      "bank_code": 'zalopayapp',
      'description': description,
      "callback_url": `http://localhost:${process.env.PORT}/shop/checkout`,
      "embed_data": JSON.stringify({}),
      "item": JSON.stringify(items),
      'key1': key1,
      "mac": ""
    }

    const hmac_input = `${data.app_id}|${data.app_trans_id}|${data.app_user}|${data.amount}|${data.app_time}|${data.embed_data}|${data.item}`;

    const mac = crypto.createHmac('sha256', key1).update(hmac_input).digest('hex');

    data.mac = mac;

    console.log('data: ',data);
    fetch('https://sb-openapi.zalopay.vn/v2/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
          if(data.return_code === 1) res.status(200).json(data);
          else res.status(500).json(data);
        })
        .catch(err => console.log(err));
  }
}

module.exports = new OrderService;
