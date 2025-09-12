const userModel = require('../models/userModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        // Validation using express-validator
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ 
            success: false,
            message: 'Validation errors',
            errors: errors.array() 
         });
       }

       const { name , email, password} = req.body;

       //Check if user already exists
       const existingUser = await userModel.findOne({ email });
        if(existingUser) return res.status(200).json({
            success: false,
            message: 'User already exists',
        });
         // Proceed to create user
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = new userModel({
        name,
        email,
        password: hashedPassword
       });
        const userData = await user.save();

        res.status(201).json({ 
            success: true,
            message: 'User registered successfully',
            data: userData
        });

    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: error.message 
        });
    }
}


module.exports = { registerUser };