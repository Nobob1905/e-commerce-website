const { body, validationResult } = require('express-validator');

const updateCoupon = [
  body('coupon_name').optional().isString().withMessage('Coupon name must be a string'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('code')
    .optional()
    .isLength({ min: 5, max: 5 }).withMessage('Code must be exactly 5 characters')
    .isAlphanumeric().withMessage('Code must be alphanumeric'),
  body('discount').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be between 0 and 100'),
  body('maxUsage').optional().isInt({ min: 1, max: 10 }).withMessage('Max usage must be an integer between 1 and 10'),
  body('usedCount').optional().isInt({ min: 0 }).withMessage('Used count must be a non-negative integer'),
];

const handleValidation = (req, res, next) => {
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
  updateCoupon,
  handleValidationUpdateCoupon: handleValidation,
};