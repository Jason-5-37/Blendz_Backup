const express = require('express');
const {addMachine, getAllMachine, getMachine} = require('../controllers/machineController');

const router = express.Router();

router.post('/machine', addMachine);
router.get('/machines', getAllMachine);
router.get('/machine/:id', getMachine);

module.exports = {
    routes: router
}