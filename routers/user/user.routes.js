const { verifiyOtp, sendingOtp, registerUser, loginUser, logoutUser, forgotPasswordUser, resetPasswordUser } = require("../../controllers/user/user.controller");

const router = require("express").Router();

router.post("/send-otp", sendingOtp)
router.post("/otp-verification", verifiyOtp)
router.post("/register/:token", registerUser)
router.post("/forgot-password", forgotPasswordUser)
router.post("/reset-password/:email", resetPasswordUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)


module.exports = router;