const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },

}, {
    timestamps: true
});


module.exports = {
    Admin: mongoose.model("Admin", registerSchema)
}