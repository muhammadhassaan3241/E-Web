const router = require('express').Router();
const { createAdmin, updateAdmin, deleteAdmin, viewAdmins, viewAdmin, loginAdmin, registerAdmin } = require('../../controllers/admin/admin.controller')
const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/admin")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })


router.post('/register-admin', upload.array('images', 20), registerAdmin);
router.post('/create-admin', upload.array('images', 20), createAdmin);
router.post('/update-admin', upload.array('images', 20), updateAdmin);
router.post('/delete-admin', deleteAdmin);
router.get('/view-admins', viewAdmins);
router.get('/view-admin-profile', viewAdmin)
router.post('/login-admin', loginAdmin)

module.exports = router;