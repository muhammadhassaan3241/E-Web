const { Product } = require("../../models/admin/cat-subcat-pro.model");
const slug = require('slug');
module.exports = {
    createProduct: async (req, res) => {
        try {
            const { name, description, category_id, subcategory_id, price, screenSize, primaryCamera, secondaryCamera, RAM, memory, features } = req.body;
            const product = await Product.findOne({ name: name });
            if (product) {
                res.send({ success: false, msg: "product already exist" })
            }
            else {

                const files = req.files;

                function imagePath(file) {
                    const paths = file.map(item => { return { path: item.path } })
                    return paths;
                }

                const newProduct = await Product.create({
                    name: name,
                    slug: slug(name),
                    description: description,
                    images: imagePath(files),
                    category_id: category_id,
                    subcategory_id: subcategory_id,
                    price: price,
                    screenSize: screenSize,
                    primaryCamera: primaryCamera,
                    secondaryCamera: secondaryCamera,
                    RAM: RAM,
                    memory: memory,
                    features: features,
                });
                if (newProduct) {
                    res.json({ success: true, msg: "product added successfully!", _id: newProduct.id })
                }
            }

        } catch (e) {
            res.json({ success: false, msg: "something went wrong." })
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { name, image, description, categoryId, subcategoryId } = req.body;
            const productId = req.params._id;

            const product = await Product.findByIdAndUpdate(productId,
                {
                    name: name,
                    slug: slug(name),
                    description: description,
                    image: image,
                    category_id: categoryId,
                    subcategory_id: subcategoryId,
                }
            );
            if (product) {
                console.log('product has been updated!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = req.params._id;

            const product = await Product.findByIdAndDelete(productId);
            if (product) {
                console.log('product has been deleted!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    viewProducts: async (req, res) => {
        try {
            const categories = await Product.find();
            if (categories) {
                res.redirect('/admin/view-pro')
            }

        } catch (e) {
            console.log(e);
        }
    },
}