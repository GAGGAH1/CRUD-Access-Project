const express = require('express');

const { registerUser } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');
const { validateRegistration } = require('../helpers/validator');
const router = express.Router();

router.post('/register', validateRegistration, registerUser);



module.exports = router;