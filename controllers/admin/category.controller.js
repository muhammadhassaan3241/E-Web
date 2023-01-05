const { Category } = require("../../models/admin/cat-subcat-pro.model");
const slug = require('slug')
module.exports = {
    createCategory: async (req, res) => {
        try {
            const { name } = req.body;

            const category = await Category.findOne({ name: name });
            if (category) {
                res.send({ message: "email or contact already in use" })
            }
            const files = req.files;

            function imagePath(file) {
                const paths = file.map(item => { return { path: item.path } })
                return paths;
            }

            res.redirect('/admin/add-cat')

            const newCategory = await Category.create({
                name: name,
                slug: slug(name),
                image: imagePath(files),
            });
            if (newCategory) {
                console.log("category has been created!");
                console.log(newCategory);
            }

        } catch (e) {
            console.log(e);
        }
    },

    updateCategory: async (req, res) => {
        try {
            const { name, image } = req.body;
            const categoryId = req.params._id;

            const category = await Category.findByIdAndUpdate(categoryId,
                {
                    name: name,
                    slug: slug(name),
                    image: image,
                }
            );
            if (category) {
                console.log('category has been updated!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const categoryId = req.params._id;

            const category = await Category.findByIdAndDelete(categoryId);
            if (category) {
                console.log('category has been deleted!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    viewCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            if (categories) {
                res.redirect('/admin/view-cat')
            }

        } catch (e) {
            console.log(e);
        }
    },

}