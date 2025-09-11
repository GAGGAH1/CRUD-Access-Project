const express = require('express');

require('dotenv').config();

const connectDB = require("./config/db")

const app  = express();
const PORT = process.env.PORT




connectDB.then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`)
    });
});


