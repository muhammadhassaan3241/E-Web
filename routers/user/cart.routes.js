const { Logged } = require('../../configurations/user/utilities/verifyToken')
const { createCart, deleteCart, updateCart } = require('../../controllers/user/cart.controller')

const router = require('express').Router();


router.get('/cart/:slug', Logged, createCart)
router.get('/delete/:slug', Logged, deleteCart)
router.get('/update/:slug', Logged, updateCart)
module.exports = router;

