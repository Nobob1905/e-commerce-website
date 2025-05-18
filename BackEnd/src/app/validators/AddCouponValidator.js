const { body, validationResult } = require('express-validator');

const addCouponValidator = [
  body('coupon_name')
    .notEmpty()
    .withMessage('Coupon name is required')
    .isString()
    .withMessage('Coupon name must be a string'),

  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description must be a string'),

   body('code')
    .notEmpty()
    .withMessage('Code is required')
    .isString()
    .withMessage('Code must be a string')
    .isLength({ min: 5, max: 5 })
    .withMessage('Code must be exactly 5 characters')
    .matches(/^[a-zA-Z0-9]{5}$/)
    .withMessage('Code must be alphanumeric (A-Z, a-z, 0-9)'),

  body('discount')
    .notEmpty()
    .withMessage('Discount is required')
    .isNumeric()
    .withMessage('Discount must be a number'),

  body('maxUsage')
    .notEmpty()
    .withMessage('Max usage is required')
    .isInt({ min: 1, max: 10 })
    .withMessage('Max usage must be an integer between 1 and 10'),
];

// Middleware to handle validation results
const handleValidationCoupon = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      msg: errors.array()[0].msg,
    });
  }
  next();
};

module.exports = {
  addCouponValidator,
  handleValidationCoupon: handleValidationCoupon,
};