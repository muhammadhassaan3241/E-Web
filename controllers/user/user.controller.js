const { User } = require("../../models/user/user.model");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const { default: mongoose } = require("mongoose");
const Cryptr = require("cryptr");

const mailTransporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    service: 'gmail',
    auth: {
        user: "wetavfx4935@gmail.com",
        pass: "nevdbydkcypvmrkq",
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {
    sendingOtp: async (req, res) => {
        try {
            const { email, phone } = req.body;
            const user = await User.findOne({ email, phone })
            if (user) {
                res.json({ message: "email already existed" })
            }

            const verify = await User.create({
                name: null,
                image: null,
                email: email || null,
                phone: phone || null,
                otp: Math.floor(Math.random() * 10000) + 1,
                token: crypto.randomBytes(64).toString('hex'),
                password: null,
            });
            if (verify) {
                const mailOptions = {
                    from: '"Verify your Email" <wetavfx4935@gmail.com>',
                    to: verify.email,
                    subject: "verify your gmail ID",
                    html: `<h2>${verify.otp}</h2>`
                }

                mailTransporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("otp has been send");
                    }
                })
                res.redirect('/user/verification')
            }
        } catch (e) {
            console.log(e);
        }
    },
    verifiyOtp: async (req, res) => {
        try {
            const { otp, token } = req.body;
            const OTP = otp.join("").replace(/,/g, "")
            const user = await User.findOne({ otp: OTP });
            if (user) {
                user.otp = null,
                    user.verified = true,
                    await user.save()
                res.redirect(`/user/register/${user.token}`);
            }
        } catch (e) {
            console.log(e);
        }
    },

    registerUser: async (req, res) => {
        try {
            const Token = req.params.token;
            const { name, email, phone, image, password } = req.body;
            const user = await User.findOne({ token: Token });
            user.name = name;
            user.email = email || null;
            user.phone = phone || null;
            user.image = image;
            user.password = password
            await user.save()
            const token = jwt.sign(
                {
                    _id: user.id,
                },
                process.env.SECRET_KEY_1,
                {
                    expiresIn: "1d"
                }
            );

            res.cookie('jwt_sign', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            });

            user.token = token;
            res.header('jwt_sign', token).redirect("/")

        } catch (e) {
            console.log(e);
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, phone, password } = req.body;
            const user = await User.findOne({ email: email } || { phone: phone });
            if (!user) {
                res.send({ success: false, msg: 'no user for that email' })
            }
            else if (user && user.password === password && user.verified === true) {
                const token = jwt.sign(
                    {
                        _id: user.id,
                    },
                    process.env.SECRET_KEY_1,
                    {
                        expiresIn: "1d",
                    }
                );
                res.cookie("jwt_sign", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                });

                user.token = token;
                res.header('jwt_sign', token).send({ success: true, msg: "Redirecting to Website" })
            }
        } catch (e) {
            console.log(e);
        }
    },

    forgotPasswordUser: async (req, res, next) => {
        try {
            const userEmail = req.body.email;
            const user = await User.findOne({ email: userEmail })
            if (user && user.email === userEmail) {
                const cryptr = new Cryptr('mySecretEmail');
                const encryptedEmail = cryptr.encrypt(user.email)
                const mailOptions = {
                    from: '"Verify your Email" <wetavfx4935@gmail.com>',
                    to: user.email,
                    subject: "verify your gmail ID",
                    html: `<a href="http://localhost:8000/user/reset-password/${encryptedEmail}">Confirm Your Email Address to Reset Your Password</a>`
                }

                mailTransporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("forgot password link has been send to your email");
                    }
                })
                res.redirect('back')
            }
        } catch (e) {
            res.send(e)
        }
    },

    resetPasswordUser: async (req, res, next) => {
        try {
            const userEmail = req.params.email;
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            const cryptr = new Cryptr('mySecretEmail');
            const decryptEmail = cryptr.decrypt(userEmail);
            if (password === confirmPassword) {
                const emailFound = { email: decryptEmail };
                const newPassword = { password: password }
                const user = await User.findOneAndUpdate(emailFound, newPassword); {
                    if (user) {
                        res.redirect('/user/login')
                    }
                }

            }
        } catch (e) {
            res.send(e)
        }
    },

    logoutUser: async (req, res) => {
        res.clearCookie('jwt_sign');
        res.clearCookie('connect.sid');
        res.redirect('/')
    }

}