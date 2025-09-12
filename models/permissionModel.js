const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,     
        ref: 'User'
    },
    permissions: [{
        permission_name: String,
        permission_value: [Number] // e.g.,0 -> write,1 -> read,2 -> edit,3 -> delete
    }]
},{ timestamps: true });

module.exports = mongoose.model('Permission', permissionSchema);
// module.exports = mongoose.models.User || mongoose.model('User', userSchema);