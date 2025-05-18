const {check} = require('express-validator');

placeOrderValidator = [
    check('user_id')
        .trim()
        .notEmpty().withMessage('User ID is required !'),
    check('totalBill')
        .trim()
        .notEmpty().withMessage('Total Bill is required !'),
    check('address_id')
        .trim()
        .notEmpty().withMessage('Address is required !'),
    check('email')
        .trim()
        .notEmpty().withMessage('Email is required !')
        .isEmail().withMessage('Invalid email format !'),
];

placeOrderNoLoginValidator = [
    check('totalBill')
        .trim()
        .notEmpty().withMessage('Total Bill is required !'),
    check('email')
        .trim()
        .notEmpty().withMessage('Email is required !')
        .isEmail().withMessage('Invalid email format !'),
    check('userInfo.fullName')
        .trim()
        .notEmpty().withMessage('Full name is required !'),
    check('userInfo.address')
        .trim()
        .notEmpty().withMessage('Address is required !'),
    check('userInfo.phone_number')
        .trim()
        .notEmpty().withMessage('Phone number is required !'),
]

module.exports = {
    placeOrderValidator,
    placeOrderNoLoginValidator
}