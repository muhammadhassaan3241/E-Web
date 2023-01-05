// Database Connection
require('./database/connection');
require('dotenv').config();
const { Logged } = require('./configurations/user/utilities/verifyToken');
const { Category, Product, Subcategory } = require('./models/admin/cat-subcat-pro.model');
// Database Connection

//Packages
const express = require("express");
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookie = require('cookie-session');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path')
const multer = require('multer');
const cors = require('cors');
const forms = multer();
const port = 8000;
//Packages

//==========================================================================
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
// const io = new Server(http, {})

// import { Server } from "socket.io";

// const httpServer = createServer();
const io = new Server(http, {
    // options
});

//==========================================================================




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(forms.array());
app.use(flash());
app.use(express.static('assets/admin'));
app.use(express.static('assets/user'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.db
    }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));

//==========================================================================
app.use("/css", express.static(path.resolve(__dirname, "/assets/admin/css")));
app.use("/img", express.static(path.resolve(__dirname, "/assets/admin/images")));
app.use("/js", express.static(path.resolve(__dirname, "/assets/admin/js")));
app.use("/vendor", express.static(path.resolve(__dirname, "/assets/admin/vendor")));
app.use("/scss", express.static(path.resolve(__dirname, "/assets/admin/scss")));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
app.use("/font", express.static(path.resolve(__dirname, "/assets/admin/fonts")));
app.use("/libs", express.static(path.resolve(__dirname, "/assets/admin/libs")));
//==========================================================================
//==========================================================================
app.use("/css", express.static(path.resolve(__dirname, "/assets/user/css")));
app.use("/img", express.static(path.resolve(__dirname, "/assets/user/images")));
app.use("/js", express.static(path.resolve(__dirname, "/assets/user/js")));
app.use("/vendor", express.static(path.resolve(__dirname, "/assets/user/vendor")));
app.use("/scss", express.static(path.resolve(__dirname, "/assets/user/scss")));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
app.use("/font", express.static(path.resolve(__dirname, "/assets/user/fonts")));
//==========================================================================

//HBS
hbs.registerPartials(__dirname + "/views/admin/partials/")
hbs.registerPartials(__dirname + "/views/user/partials/")
hbs.registerHelper('json', (context) => {
    return JSON.stringify(context);
})

hbs.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 && v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

hbs.registerHelper('compare', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});


hbs.registerHelper('ternary', function (v1, v2, options) {
    if (v1 === v2) {
        return true
    }
    return false
});

hbs.registerHelper('ifNotEquals', function (arg1, arg2, options) {
    return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper('formatPrice', function (arg1) {
    // console.log({ arg1: arg1.toString() });
    const Formatter = Intl.NumberFormat('en-US', {
        currency: 'pkr',
        style: 'currency'

    })
    return Formatter.format(arg1)
});

hbs.registerHelper('each_upto', function (ary, max, options) {
    if (!ary || ary.length == 0)
        return options.inverse(this);

    var result = [];
    for (var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});


//HBS
app.set('view engine', 'hbs')
//HBS

// Cart
app.use("*", (req, res, next) => {
    res.locals.cart = req.session.cart;
    next()
});
// Cart

//Routes
const adminPages = require('./pages/admin/pages')
app.use('/admin/', adminPages)
const userPages = require('./pages/user/pages')
app.use("/user/", userPages)

app.get("/", authorize, async (req, res) => {
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
    // console.log(JSON.stringify(sidebar));
    res.render('user/homepage', { title: "Home", allCategory: categories, products: products, sidebar: sidebar })
})

// Routes
const userRoutes = require('./routers/user/user.routes')
app.use("/user", userRoutes)
const cartRoutes = require('./routers/user/cart.routes')
app.use("/user", cartRoutes)

//Routes
const adminRoutes = require('./routers/admin/admin.routes')
app.use('/', adminRoutes)
const categoryRoutes = require('./routers/admin/category.routes')
app.use('/', categoryRoutes)
const subcategoryRoutes = require('./routers/admin/subcategory.routes')
app.use('/', subcategoryRoutes)
const productRoutes = require('./routers/admin/product.routes')
app.use('/', productRoutes)
const roleRoutes = require('./routers/admin/role.routes')
app.use('/', roleRoutes)
const permissionRoutes = require('./routers/admin/permission.routes');
const responseMiddleware = require('./middlewares/user/cart.mw');
const { all } = require('./pages/user/pages');
app.use('/', permissionRoutes)


// Middlewares
app.use(function (req, res, next) {
    req.on("end", function () {
        // console.log('on request end', req, "\n", { res });
    });
    next();
});

function authorize(req, res, next) {
    res.locals.jwt = req.cookies.jwt_sign
    next()
}

// global.io = io;

io.on('connection', socket => {
    console.log("Socket Connected");

    socket.on('disconnect', () => {
        console.log("Socket Disconnected");
    });

    socket.on('new_product', (formData) => {
        console.log('event => new product');
        socket.broadcast.emit('new_product', formData);
    })

    socket.on('user_login', (formData) => {
        console.log('event => login');
        socket.broadcast.emit('user_login', formData);
    })

    global.socket = socket;
});




http.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

//==========================================================================
// Socket Setup



