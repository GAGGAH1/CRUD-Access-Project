const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
},{ timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
// module.exports = mongoose.models.User || mongoose.model('User', userSchema);