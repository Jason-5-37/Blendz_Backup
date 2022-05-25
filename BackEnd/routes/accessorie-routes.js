const express = require('express');
const {addAccessorie, getAllAccessorie, getAccessorie,updateAccessorie,deleteAccessorie} = require('../controllers/accessorieController');

const router = express.Router();

router.post('/accessorie', addAccessorie);
router.get('/accessories', getAllAccessorie);
router.get('/accessorie/:id', getAccessorie);
router.post('/accessorie/update/:id', updateAccessorie);
router.post('/accessorie/delete/:id', deleteAccessorie);

module.exports = {
    routes: router
}