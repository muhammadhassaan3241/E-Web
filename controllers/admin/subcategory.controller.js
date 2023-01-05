const { Subcategory } = require("../../models/admin/cat-subcat-pro.model");
const slug = require('slug');
const { default: mongoose } = require("mongoose");
module.exports = {
    createSubcategory: async (req, res) => {
        try {
            const { name, category_id } = req.body;

            const subcategory = await Subcategory.findOne({ name: name });
            if (subcategory && JSON.stringify(subcategory.category_id) === JSON.stringify(category_id)) {
                res.send({ message: "existed" })
            }
            else {

                const newSubcategory = await Subcategory.create({
                    name: name,
                    slug: slug(name),
                    category_id: category_id

                });
                if (newSubcategory) {
                    console.log("subcategory has been created!");
                    res.redirect('/admin/add-subcat')
                }
            }

        } catch (e) {
            console.log(e);
        }
    },

    updateSubcategory: async (req, res) => {
        try {
            const { name, image, categoryId } = req.body;
            const subcategoryId = req.params._id;

            const subcategory = await Subcategory.findByIdAndUpdate(subcategoryId,
                {
                    name: name,
                    slug: slug(name),
                    image: image,
                    category_id: categoryId
                }
            );
            if (subcategory) {
                console.log('subcategory has been updated!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    deleteSubcategory: async (req, res) => {
        try {
            const subcategoryId = req.params._id;

            const subcategory = await Subcategory.findByIdAndDelete(subcategoryId);
            if (subcategory) {
                console.log('subcategory has been deleted!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    getCategoryId: async (req, res) => {
        try {
            const catId = req.params.id;
            const subcategory = await Subcategory.find({
                "category_id": { "$in": [mongoose.Types.ObjectId(catId)] }
            });
            res.send({ subcategory: subcategory })
        } catch (e) {
            console.log(e);
        }
    },

}