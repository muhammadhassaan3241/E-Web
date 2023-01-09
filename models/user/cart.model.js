const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "credentials",
        required: true,
    },
    items: [{
        id: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },

    }],
}, {
    timestamps: true,
})

module.exports = {
    Cart: mongoose.model("cart", cartSchema)
}