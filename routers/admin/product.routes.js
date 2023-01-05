const router = require('express').Router();
const { createProduct, updateProduct, deleteProduct, viewProducts } = require('../../controllers/admin/product.controller')
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
const upload = multer({ storage: storage, fileFilter: mimeTypesFilter(mimeTypes) })

router.post('/create-product', upload.array('images', 20), createProduct);
router.post('/update-product', upload.array('images', 20), updateProduct);
router.post('/delete-product', deleteProduct);
router.get('/view-products', viewProducts);
// router.get('/filter-products', filterProducts);

module.exports = router;