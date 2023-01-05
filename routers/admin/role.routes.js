const router = require('express').Router();
const { createRole, updateRole, deleteRole, viewRoles } = require('../../controllers/admin/role.controller');
// const multer = require("multer");
// const path = require('path');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "upload")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({ storage: storage })

router.post('/create-role', createRole);
router.post('/update-role', updateRole);
router.post('/delete-role', deleteRole);
router.get('/view-roles', viewRoles);

module.exports = router;