const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cart: {
        type: Array,

    },

}, {
    timestamps: true
})

module.exports = {
    User: mongoose.model("cart", cartSchema)
}