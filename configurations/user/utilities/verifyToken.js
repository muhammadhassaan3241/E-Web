const jwt = require('jsonwebtoken');

module.exports = {
    Logged: async (req, res, next) => {
        const token = req.cookies.jwt_sign;
        if (!token) return res.redirect('/user/login');
        try {
            const user = jwt.verify(token, process.env.SECRET_KEY_1)
            req.user = user
            next()
        } catch (e) {
            res.send("Unauthorized");
        }
    },
}