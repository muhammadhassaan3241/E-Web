const { default: mongoose } = require("mongoose");
const { Role } = require("../../models/admin/role.model");

module.exports = {
    createRole: async (req, res) => {
        try {
            const { name, permission } = req.body;

            const role = await Role.findOne({ name: name });
            if (role) {
                res.send({ message: "role existed!" })
            }

            //Fetching Permissions
            const permissions = [];
            permission.map((p) => {
                permissions.push({ permId: mongoose.Types.ObjectId(p) })
            })
            //Fetching Permissions

            const newRole = await Role.create({
                name: name,
                permission: permissions
            });
            if (newRole) {
                console.log("role has been created!");
                res.redirect('/admin/add-role')
            }

        } catch (e) {
            console.log(e);
        }
    },

    updateRole: async (req, res) => {
        try {
            const { name, permission } = req.body;
            const roleId = req.params._id;

            const role = await Role.findByIdAndUpdate(roleId,
                {
                    name: name,
                    permission: permission,
                }
            );
            if (role) {
                console.log('role has been updated!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    deleteRole: async (req, res) => {
        try {
            const roleId = req.params._id;

            const role = await Role.findByIdAndDelete(roleId);
            if (role) {
                console.log('role has been deleted!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    viewRoles: async (req, res) => {
        try {
            const roles = await Role.find();
            if (roles) {
                res.redirect('/admin/view-role')
            }

        } catch (e) {
            console.log(e);
        }
    },

}