const { default: mongoose } = require("mongoose");
const { Permission } = require("../../models/admin/permission.model");

module.exports = {
    createPermission: async (req, res) => {
        try {
            const { name } = req.body;

            const perms = await Permission.findOne({ name: name });
            if (perms) {
                res.send({ message: "permission existed!" })
            }

            const newPerms = await Permission.create({
                name: name,
            });
            if (newPerms) {
                console.log("permission has been created!");
                res.redirect('/admin/add-per')
            }

        } catch (e) {
            console.log(e);
        }
    },

    updatePermission: async (req, res) => {
        try {
            const { name } = req.body;
            const permissionId = req.params._id;

            const perms = await Permission.findByIdAndUpdate(permissionId,
                {
                    name: name,
                }
            );
            if (perms) {
                console.log('permission has been updated!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    deletePermission: async (req, res) => {
        try {
            const permissionId = req.params._id;

            const perms = await Permission.findByIdAndDelete(permissionId);
            if (perms) {
                console.log('permission has been deleted!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    viewPermissions: async (req, res) => {
        try {
            const perms = await Permission.find();
            if (perms) {
                res.redirect('/admin/view-per')
            }

        } catch (e) {
            console.log(e);
        }
    },

}