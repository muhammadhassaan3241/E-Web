// const { Product } = require('../../models/admin/cat-subcat-pro.model');
const { Product } = require('../../models/admin/cat-subcat-pro.model');
const { Cart } = require('../../models/user/cart.model');
module.exports = {
    createCart: async (req, res, next) => {
        try {
            const proId = req.params.id;
            const userId = req.user._id;
            const { quantity } = req.body;
            const cart = await Cart.findOne({ userId: userId });
            const product = await Product.findById(proId);
            if (!cart) {
                const newCart = await Cart.create({
                    userId: userId,
                    items: [{
                        id: product.id,
                        name: product.name,
                        image: product.images,
                        price: product.price,
                        quantity: quantity,
                    }]
                });
                if (newCart) {
                    res.send({
                        success: true, msg: 'Cart created successfully'
                    })
                }
            }
        } catch (e) {
            res.send(e)
        }
    },

    updateCart: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const proId = req.params.id;
            const product = await Product.findById(proId);
            const cart = await Cart.findOne({ userId: userId });
            if (cart) {
                console.log(typeof product.id);
                const itemIndex = cart.items.filter((item) => {
                    if (product.id === item.id.toString()) {
                        item.quantity++;
                    }
                })
            }
            cart.save();
            console.log(cart);
        }
        catch (e) {
            console.log(e);
        }


    },

    deleteCart: async (req, res, next) => {
        try {

        } catch (e) {
            res.send(e)
        }
    },

}