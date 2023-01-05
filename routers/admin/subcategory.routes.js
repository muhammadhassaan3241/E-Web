const router = require('express').Router();
const multer = require("multer");
const path = require('path');
const { createSubcategory, updateSubcategory, deleteSubcategory, viewSubcategories, getCategoryId } = require('../../controllers/admin/subcategory.controller');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

router.post('/create-subcategory', createSubcategory);
router.post('/update-subcategory', updateSubcategory);
router.post('/delete-subcategory', deleteSubcategory);
router.get('/getCategoryId/:id', getCategoryId);

module.exports = router;