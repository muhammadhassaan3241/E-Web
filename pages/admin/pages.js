const { verifyAdmin } = require('../../configurations/admin/verifyToken');
const { Category, Subcategory, Product } = require('../../models/admin/cat-subcat-pro.model');
const { Permission } = require('../../models/admin/permission.model');
const { Role } = require('../../models/admin/role.model');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('admin/Login', { title: "Login" })
});

router.get('/register', (req, res) => {
    res.render('admin/Register', { title: "Register" })
});

router.get('/dashboard', verifyAdmin, async (req, res) => {
    const products = await Product.find();
    const category = await Category.find();
    const subcategory = await Subcategory.find();
    const productCount = products.length;
    const categoryCount = category.length;
    const subcategoryCount = subcategory.length;
    res.render('admin/Dashboard', { title: "Dashboard", productCount: productCount, categoryCount: categoryCount, subcategoryCount: subcategoryCount })
});


router.get('/add-admin', verifyAdmin, (req, res) => {
    res.render('admin/User/addUser', { title: "Add Admin" })
});

router.get('/add-cat', verifyAdmin, (req, res) => {
    res.render('admin/Category/addCategory', { title: "Add Category" })
});

router.get('/add-subcat', verifyAdmin, async (req, res) => {

    const categories = await Category.find().select('id').select('name');

    res.render('admin/Subcategory/addSubcategory', { title: "Add Subcategory", categories: categories })
});

router.get('/add-pro', verifyAdmin, async (req, res) => {

    const categories = await Category.find().select('id').select('name');

    res.render('admin/Product/addProduct', { title: "Add Product", categories: categories })
});

router.get('/add-per', verifyAdmin, async (req, res) => {
    res.render('admin/Permission/addPermission', { title: "Add Permission" })
});

router.get('/add-role', verifyAdmin, async (req, res) => {
    const permissions = await Permission.find().select('name').select('id');
    const myPermissions = []
    array_chunks(permissions, 4).map((p) => {
        myPermissions.push({ perms: p })
    })
    res.render('admin/Role/addRole', { title: "Add Role", permissions: myPermissions })
});

router.get('/view-admin', verifyAdmin, (req, res) => {
    res.render('admin/User/viewUser', { title: "View Admins" })
});

router.get('/view-cat', async (req, res) => {

    const categories = await Category.find();

    res.render('admin/Category/viewCategory', { title: "View Categories", categories: categories })
});

router.get('/view-subcat', async (req, res) => {

    const subcategories = await Subcategory.find().populate('category_id', 'name');

    res.render('admin/Subcategory/viewSubcategory', { title: "View Subcategories", subcategories: subcategories })
});

router.get('/view-pro', async (req, res) => {

    const products = await Product.find().populate('category_id', 'name').populate('subcategory_id', 'name')

    res.render('admin/Product/viewProduct', { title: "View Products", products: products })
});

router.get('/view-per', async (req, res) => {
    const permissions = await Permission.find();
    res.render('admin/Permission/viewPermission', { title: "View Permissions", permissions: permissions })
});

router.get('/view-role', async (req, res) => {
    const roles = await Role.find();
    res.render('admin/Role/viewRole', { title: "View Roles", roles: roles })
});

module.exports = router;


// Chunks
const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
// Chunks