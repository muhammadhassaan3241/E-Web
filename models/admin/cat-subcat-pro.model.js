const mongoose = require('mongoose');
const { stringify } = require('querystring');




const categorySchema = new mongoose.Schema({

    name: String,
    slug: String,
    image: Array,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },


}, { timestamps: true })


const subcategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
}, { timestamps: true })

const productSchema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    images: Array,
    RAM: Number,
    memory: Number,
    screenSize: Number,
    price: Number,
    primaryCamera: Number,
    secondaryCamera: String,
    features: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory"
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },

}, { timestamps: true })


module.exports = {
    Category: mongoose.model('Category', categorySchema),
    Subcategory: mongoose.model('Subcategory', subcategorySchema),
    Product: mongoose.model('Product', productSchema)
}


