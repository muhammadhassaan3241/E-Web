const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    image: {
        type: String
    },
    otp: {
        type: String,
    },
    token: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})

module.exports = {
    User: mongoose.model("credentials", userSchema)
}