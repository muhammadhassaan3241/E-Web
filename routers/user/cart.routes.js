const { Logged } = require('../../configurations/user/utilities/verifyToken')
const { createCart, deleteCart, updateCart } = require('../../controllers/user/cart.controller')

const router = require('express').Router();


router.get('/cart/:id', Logged, createCart)
router.get('/delete/:id', Logged, deleteCart)
router.get('/update/:id', Logged, updateCart)
module.exports = router;

