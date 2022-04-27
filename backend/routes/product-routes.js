const express = require('express');
const {addProduct, getAllProducts, getProduct,getProducttype} = require('../controllers/productController');

const router = express.Router();

router.post('/product', addProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProduct);
router.get('/product/type/:type', getProducttype);


module.exports = {
    routes: router
}