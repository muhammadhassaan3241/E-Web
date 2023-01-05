const { Admin } = require("../../models/admin/admin.model");
const jwt = require('jsonwebtoken');

module.exports = {

    // loginSuperAdmin: async (req, res) => {
    //     try {

    //         const superAdminEmail = process.env.SUPERADMIN_EMAIL;
    //         const superAdminPassword = process.env.SUPERADMIN_PASSWORD;

    //         const { email, password } = req.body;

    //         if (email === superAdminEmail && password === superAdminPassword) {
    //             console.log(true);
    //             const token = jwt.sign(
    //                 {

    //                     email: superAdminEmail,
    //                 },
    //                 process.env.SECRET_KEY_1,
    //                 {
    //                     expiresIn: "1d",
    //                 }
    //             );
    //             res.cookie('jwt_superadmin_login', token, {
    //                 httpOnly: true,
    //                 secure: process.env.NODE_ENV === "production",
    //             });
    //             superAdminEmail.token = token
    //             res.header('jwt_superadmin_login', token).redirect('/dashboard')
    //         }
    //     } catch (e) {
    //         res.send(e)
    //     }
    // },

    loginAdmin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const admin = await Admin.findOne({ email: email });
            if (admin && admin.password === password) {
                const token = jwt.sign(
                    {
                        _id: admin.id,
                        name: admin.name,
                        username: admin.username,
                        email: admin.email,
                    },
                    process.env.SECRET_KEY_2,
                    {
                        expiresIn: "1d",
                    }
                );
                res.cookie('jwt_admin_login', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                });
                admin.token = token
                res.header('jwt_admin_login', token).redirect('/admin/dashboard')
            }
        } catch (e) {
            res.send(e)
        }
    },


    registerAdmin: async (req, res) => {
        try {
            const { name, username, email, password } = req.body;

            const admin = await Admin.findOne({ email: email });
            if (admin) {
                res.send({ message: "email or contact already in use" })
            }

            const newAdmin = await Admin.create({
                name: name,
                username: username,
                email: email,
                password: password,
            });
            if (newAdmin) {
                console.log("super admin has been created!");
                res.redirect('/admin')
            }

        } catch (e) {
            console.log(e);
        }
    },


    createAdmin: async (req, res) => {
        try {
            const { name, image, phone, email, password, termsAndConditions, role } = req.body;

            const admin = await Admin.findOne({ email: email } || { phone: phone });
            if (admin) {
                res.send({ message: "email or contact already in use" })
            }

            const newAdmin = await Admin.create({
                name: name,
                image: image,
                phone: phone,
                email: email,
                password: password,
                termsAndConditions: termsAndConditions,
                role: role,
            });
            if (newAdmin) {
                console.log("admin has been created!");
                res.redirect('/admin/view-admin')
            }

        } catch (e) {
            console.log(e);
        }
    },

    updateAdmin: async (req, res) => {
        try {
            const { name, image, phone, email, password, termsAndConditions, role } = req.body;
            const adminId = req.params._id;
            const update = await Admin.findByIdAndUpdate(adminId,
                {
                    name: name,
                    image: image,
                    phone: phone,
                    email: email,
                    password: password,
                    termsAndConditions: termsAndConditions,
                    role: role,
                }
            );
            if (update) {
                console.log('admin has been updated!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    deleteAdmin: async (req, res) => {
        try {
            const adminId = req.params._id;

            const update = await Admin.findByIdAndDelete(adminId);
            if (update) {
                console.log('admin has been deleted!');
            }

        } catch (e) {
            console.log(e);
        }
    },

    viewAdmins: async (req, res) => {
        try {
            const admins = await Admin.find();
            if (admins) {
                res.redirect('/admin/view-admin')
            }

        } catch (e) {
            console.log(e);
        }
    },

    viewAdmin: async (req, res) => {
        try {
            const adminId = req.params._id;
            const admin = await Admin.findOne({ _id: adminId });
            if (admin) {
                res.redirect('/admin/view-admin-profile')
            }

        } catch (e) {
            console.log(e);
        }
    },


}