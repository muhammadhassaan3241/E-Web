const jwt = require('jsonwebtoken');
module.exports = {

    verifyAdmin: async (req, res, next) => {
        try {
            const token = req.cookies.jwt_admin_login;
            if (!token) return res.redirect('/admin/');
            else {
                const admin = jwt.verify(token, process.env.SECRET_KEY_2)
                req.admin = admin;
                next()
            }
        } catch (e) {
            res.send('Unauthorized! Please go back')
        }
    },

}