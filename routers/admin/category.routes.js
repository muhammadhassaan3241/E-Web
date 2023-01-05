const router = require('express').Router();
const { createCategory, updateCategory, deleteCategory, viewCategories } = require('../../controllers/admin/category.controller')
const multer = require("multer");
const mimeTypesFilter = require('@meanie/multer-mime-types-filter');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/admin")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const mimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
const upload = multer({ storage: storage, fileFilter: mimeTypesFilter(mimeTypes) });

router.post('/create-category', upload.array('image', 20), createCategory);
router.post('/update-category', upload.array('image', 20), updateCategory);
router.post('/delete-category', deleteCategory);
router.get('/view-categories', viewCategories);

module.exports = router;