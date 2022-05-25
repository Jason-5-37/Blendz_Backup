const express = require('express');
const {addBeverage, getAllBeverage, getBeverage,updateBeverage, deleteBeverage} = require('../controllers/beverageController');

const router = express.Router();

router.post('/beverage', addBeverage);
router.get('/beverages', getAllBeverage);
router.get('/beverage/:id', getBeverage);
router.post('/beverage/update/:id', updateBeverage);
router.post('/beverage/delete/:id', deleteBeverage);

module.exports = {
    routes: router
}