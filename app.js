const express = require('express');

require('dotenv').config();

const connectDB = require("./config/db")

const app  = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.static('public'));

const authRoutes = require('./routes/authRoute');


app.use('/api/user', authRoutes)



connectDB().then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`)
    });
});


