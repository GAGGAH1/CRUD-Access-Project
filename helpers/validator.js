const { check } = require('express-validator');

// Validation rules for user registration
const validateRegistration = [
  check('name')
    .notEmpty().withMessage('Name is required') 
    .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  check('email')
    .isEmail().withMessage('Please provide a valid email address'),
  check('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
module.exports = {
  validateRegistration
};