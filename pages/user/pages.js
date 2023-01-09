const { Category, Subcategory, Product } = require("../../models/admin/cat-subcat-pro.model");
const { Logged } = require('../../configurations/user/utilities/verifyToken');
const router = require("express").Router();
const util = require('util');
const Cryptr = require('cryptr');
const { Cart } = require('../../models/user/cart.model');


router.get("/contact", authorize, (req, res) => {
    res.render('user/contact', { title: "Contact" })
})
router.get("/about", authorize, async (req, res) => {
    const categories = await Category.find();
    const subcategories = await Subcategory.find();
    const products = await Product.find();

    const sidebar = []
    categories.filter((c) => {
        const subcats = []
        subcategories.filter((s) => {
            if (JSON.stringify(c.id) === JSON.stringify(s.category_id)) {
                subcats.push({ subid: s.id, subname: s.name, category_id: s.category_id })
            }
        })
        sidebar.push({ catid: c.id, catname: c.name, subcategories: subcats, sidebar: sidebar })
    })
    res.render('user/about', { title: "About", allCategory: categories, })
})
router.get("/checkout", Logged, async (req, res) => {

    res.render('user/checkout', { title: "Checkout" })
})

router.get("/cart", authorize, Logged, async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user._id })
    const items = [];
    cart.items.filter((c) => {
        const total = (c.quantity) * c.price;
        items.push({ id: c.id, name: c.name, quantity: c.quantity, price: c.price, image: c.image, total: total })
    })
    res.render('user/cart', { title: "Cart", cart: items })
})

router.get('/terms&conditions', async (req, res, next) => {
    const categories = await Category.find();
    const subcategories = await Subcategory.find();
    const products = await Product.find();

    const sidebar = []
    categories.filter((c) => {
        const subcats = []
        subcategories.filter((s) => {
            if (JSON.stringify(c.id) === JSON.stringify(s.category_id)) {
                subcats.push({ subid: s.id, subname: s.name, category_id: s.category_id })
            }
        })
        sidebar.push({ catid: c.id, catname: c.name, subcategories: subcats })
    })
    res.render('user/terms', { title: "Terms and Conditions", sidebar: sidebar })
})

// ===============================================================================================================================================
router.get("/shop/:id/?", authorize, async (req, res) => {
    const catId = req.params.id;
    const __category = await Category.find();
    const allSubcategory = await Subcategory.find();
    const products = await Product.find({ category_id: catId });
    const queryString = req.query;
    const queryStringKeys = Object.keys(queryString)
    const categories = await Category.find();
    const subcategories = await Subcategory.find();

    const sidebar = []
    categories.filter((c) => {
        const subcats = []
        subcategories.filter((s) => {
            if (JSON.stringify(c.id) === JSON.stringify(s.category_id)) {
                subcats.push({ subid: s.id, subname: s.name, category_id: s.category_id })
            }
        })
        sidebar.push({ catid: c.id, catname: c.name, subcategories: subcats })
    })

    var minimumPrice, maximumPrice, priceAbove, priceBelow;
    var minPrimaryCamera, maxPrimaryCamera;
    var maximumScreen, minimumScreen;
    var ram, ramAbove, ramBelow;
    var low_High;
    var mobileBrand;
    var memory;
    var FilterProducts = []
    if (queryStringKeys.length > 0) {

        // ===============================================================================================================================================
        // Brands Start
        if (queryStringKeys.includes('brand')) {
            mobileBrand = queryString?.brand;
        }
        if (mobileBrand) {
            const brands = await Product.find({ subcategory_id: { $eq: mobileBrand } });
            if (brands) {
                brands.filter((b) => { FilterProducts.push(b) })
            }
        }
        // Brands End

        // ===============================================================================================================================================


        // Price Range Start
        if (queryStringKeys.includes("pricemax")) {
            maximumPrice = Number(queryString?.pricemax)
        }
        if (queryStringKeys.includes("pricemin")) {
            minimumPrice = Number(queryString?.pricemin)
        }
        if (queryStringKeys.includes("greaterthan")) {
            minimumPrice = Number(queryString?.greaterthan)
            priceAbove = true
        }
        if (queryStringKeys.includes("lessthan")) {
            minimumPrice = Number(queryString?.lessthan)
            priceBelow = true
        }

        if (priceAbove) {
            const above90K = await Product.find({ price: { $gte: minimumPrice } })
            if (above90K) {
                above90K.filter((a) => { FilterProducts.push(a) })
            }
        }
        if (priceBelow) {
            const below10K = await Product.find({ price: { $lte: maximumPrice } })
            if (below10K) {
                below10K.filter((b) => { FilterProducts.push(b) })
            }
        }
        if (maximumPrice && minimumPrice) {
            const price = await Product.find({ $and: [{ price: { $gte: minimumPrice } }, { price: { $lt: maximumPrice } }] });

            if (price) {
                price.filter((p) => { FilterProducts.push(p) })
            }
        }
        // Price Range End
        // ===============================================================================================================================================
        // Primary Camera Start
        if (queryStringKeys.includes('primaryCameraMin')) {
            minPrimaryCamera = Number(queryString?.primaryCameraMin)
        }
        if (queryStringKeys.includes('primaryCameraMax')) {
            maxPrimaryCamera = Number(queryString?.primaryCameraMax)
        }
        if (minPrimaryCamera && maxPrimaryCamera) {
            console.log(minPrimaryCamera);
            console.log(maxPrimaryCamera);
            const primaryCamera = await Product.find({ $and: [{ primaryCamera: { $gte: minPrimaryCamera } }, { primaryCamera: { $lt: maxPrimaryCamera } }] });
            if (primaryCamera) {
                primaryCamera.filter((pc) => {
                    FilterProducts.push(pc)
                })
            }
        }
        // Primary Camera End
        // ===============================================================================================================================================
        // RAM Start
        if (queryStringKeys.includes("ram")) {
            ram = Number(queryString?.ram)
        }
        if (queryStringKeys.includes("maxRam")) {
            ramAbove = Number(queryString?.maxRam)
        }
        if (queryStringKeys.includes("minRam")) {
            ramBelow = Number(queryString?.minRam)
        }
        if (ramAbove) {
            const RAM = await Product.find({ RAM: { $gte: ramAbove } })
            if (RAM) {
                RAM.filter((r) => FilterProducts.push(r))
            }
        }
        if (ramBelow) {
            const RAM = await Product.find({ RAM: { $lte: ramBelow } })
            if (RAM) {
                RAM.filter((r) => FilterProducts.push(r))
            }
        }
        if (ram) {
            const RAM = await Product.find({ RAM: { $eq: ram } })
            if (RAM) {
                RAM.filter((r) => FilterProducts.push(r))
            }
        }
        // RAM End
        // ===============================================================================================================================================
        // Memory Start
        if (queryStringKeys.includes("memory")) {
            memory = Number(queryString?.memory)
        }
        if (memory) {
            const Memory = await Product.find({ memory: { $eq: memory } })
            if (Memory) {
                Memory.filter((r) => FilterProducts.push(r))
            }
        }
        // Memory End
        // ===============================================================================================================================================
        // Screen Size Start
        if (queryStringKeys.includes('maxScreenSize')) {
            maximumScreen = Number(queryString?.maxScreenSize)
        }
        if (queryStringKeys.includes('minScreenSize')) {
            minimumScreen = Number(queryString?.minScreenSize)

        }
        if (maximumScreen && minimumScreen) {
            const screenSize = await Product.find({ $and: [{ screenSize: { $gte: minimumScreen } }, { screenSize: { $lt: maximumScreen } }] })
            if (screenSize) {
                screenSize.filter((s) => {
                    FilterProducts.push(s)
                })
            }
        }
        // Screen Size End
        // ===============================================================================================================================================
        // Sorting Start
        if (queryStringKeys.includes('sort')) {
            low_High = Number(queryString?.sort)
        }
        // if (queryStringKeys.includes('highToLow')) {
        //     high_Low = Number(queryString?.sort)
        // }
        if (low_High === 1) {
            const asc = await Product.find().sort({ "price": 1 })
            asc.filter((a) => {
                FilterProducts.push(a)
            })
        }
        if (low_High === 2) {
            const desc = await (await Product.find().sort({ "price": -1 }))
            desc.filter((d) => {
                FilterProducts.push(d)
            })
        }
        // Sorting End

        if (FilterProducts.length === null) {
            res.render('user/empty-shop', {
                title: "Products",
                catID: catId,
                sidebar: sidebar,
                allSubcategory: allSubcategory,
                allCategory: __category,
                products: FilterProducts,
                priceRange: `${minimumPrice}-${maximumPrice}`,
                cameraRange: `${minPrimaryCamera}-${maxPrimaryCamera}`,
                screenRange: `${minimumScreen}-${maximumScreen}`,
                memoryRange: `${memory}`,
                ramRange: `${ram}`,
                ramBelowRange: `${ramBelow}`,
                ramAboveRange: `${ramAbove}`,
                sortRange: `${low_High}`,
                mobileBrand: `${mobileBrand}`,
            })
            return
        }

        res.render('user/shop-grid', {
            title: "Products",
            catID: catId,
            sidebar: sidebar,
            allSubcategory: allSubcategory,
            allCategory: __category,
            products: FilterProducts,
            priceRange: `${minimumPrice}-${maximumPrice}`,
            cameraRange: `${minPrimaryCamera}-${maxPrimaryCamera}`,
            screenRange: `${minimumScreen}-${maximumScreen}`,
            memoryRange: `${memory}`,
            ramRange: `${ram}`,
            ramBelowRange: `${ramBelow}`,
            ramAboveRange: `${ramAbove}`,
            sortRange: `${low_High}`,
            mobileBrand: `${mobileBrand}`,
        })
        return
    }
    res.render('user/shop-grid', {
        title: "Products",
        catID: catId,
        sidebar: sidebar,
        allSubcategory: allSubcategory,
        allCategory: __category,
        products: products,
        priceRange: `${minimumPrice}-${maximumPrice}`,
        cameraRange: `${minPrimaryCamera}-${maxPrimaryCamera}`,
        screenRange: `${minimumScreen}-${maximumScreen}`,
        memoryRange: `${memory}`,
        ramRange: `${ram}`,
        ramBelowRange: `${ramBelow}`,
        ramAboveRange: `${ramAbove}`,
        sortRange: `${low_High}`,
        mobileBrand: `${mobileBrand}`,

    })
})
// ===============================================================================================================================================

router.get("/login", LoggedIn, (req, res) => {
    res.render('user/login', { title: "Login" })
})

router.get("/register/:token", async (req, res) => {
    const token = req.params.token;
    res.render('user/register', { title: "Register", token: token })
})
router.get("/sign-up", (req, res) => {
    res.render('user/otp_sender', { title: "SignUp" })
})
router.get("/verification", (req, res) => {
    res.render('user/OTP', { title: "Verification" })
})
router.get("/product-details/:id", authorize, async (req, res) => {
    const proId = req.params.id;
    const singleProduct = await Product.findById(proId);
    res.render('user/product-details', { title: "Product Details", singleProduct: singleProduct })
})

router.get("/forgot-password", async (req, res) => {
    res.render('user/forgot-password', { title: "Forgot Password" })
})

router.get("/reset-password/:email", async (req, res) => {
    const email = req.params.email;
    res.render('user/reset-password', { title: "Forgot Password", email: email })
})

router.get("/best", async (req, res) => {

    // ================================================================================
    const categories = await Category.find();
    const subcategories = await Subcategory.find();
    const products = await Product.find();

    const sidebar = []
    categories.filter((c) => {
        const subcats = []
        subcategories.filter((s) => {
            if (JSON.stringify(c.id) === JSON.stringify(s.category_id)) {
                subcats.push({ subid: s.id, subname: s.name, category_id: s.category_id })
            }
        })
        sidebar.push({ catid: c.id, catname: c.name, subcategories: subcats, allCategory: categories })
    })
    // ================================================================================
    // ================================================================================
    var bestPrice;
    var bestMobiles = [];
    var queryString = req.query;
    var queryStringKey = Object.keys(queryString)
    if (queryStringKey.includes('bestPriceUnder')) {
        bestPrice = Number(queryString?.bestPriceUnder);
        const bestPhones = await Product.find({ price: { $lte: bestPrice } })
        bestPhones.filter((b) => {
            bestMobiles.push(b)
        })
    }
    // ================================================================================

    res.render('user/bestMobileTable', { title: "Best Mobiles", sidebar: sidebar, bestMobiles: bestMobiles })
})

function LoggedIn(req, res, next) {
    const token = req.cookies.jwt_sign;
    if (token) return res.redirect('back')
    else {
        next()
    }
}

function authorize(req, res, next) {
    res.locals.jwt = req.cookies.jwt_sign
    next()
}



module.exports = router;