const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    })


module.exports = {
    Permission: mongoose.model('Permission', permissionSchema)
}
