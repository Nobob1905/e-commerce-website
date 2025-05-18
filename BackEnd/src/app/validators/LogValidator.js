const {check} = require('express-validator');

login_POST = [
    check('email')
        .trim()
        .notEmpty().withMessage('Please enter email'),
    check('password')
        .trim()
        .notEmpty().withMessage('Please enter password'),
];

// fullName,  password, email, address
register_POST = [
    check('fullName')
        .trim()
        .notEmpty().withMessage('Please enter full name'),
    check('password')
        .trim()
        .notEmpty().withMessage('Please enter password')
        .isLength({min: 6}).withMessage('Password must be at least 6 characters'),
    check('email')
        .trim()
        .notEmpty().withMessage('Please enter email')
        .isEmail().withMessage('Invalid email format'),
    check('address')
        .trim()
        .notEmpty().withMessage('Please enter address'),
];

emailValidator = [
    check('email')
        .trim()
        .notEmpty().withMessage('Please enter email !')
        .isEmail().withMessage('Invalid email format !'),
]

module.exports = {
    login_POST,
    register_POST,
    emailValidator
}