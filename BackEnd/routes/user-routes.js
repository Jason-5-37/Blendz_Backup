const express = require('express');
const {addUser, 
    getUser, 
    updateUser, 
    updateUserCart,
    getuserCart, 
    deleteCartItem,    
    updatePenddingOrder,
    getuserPenddingOrder,
    deletePenddingOrder,
    updatePaidList,
    updateCart,
    getPaidList,
    CreatePaidList,
    getDetailOrderList,
    getAllUser,
    updateRentRquest,
    getuserRequestlist,
    deleteRentRequest,
    updateRent,
    CreateRentList,
    AllRequestList,
    deleteRentList,
    getRentDetail,
    updateRentList} = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/user/:id', getUser);
router.post('/user/update/:id', updateUser);
router.post('/user/update/cart/:id', updateUserCart);
router.get('/user/cart/:id', getuserCart);
router.post('/user/cart/delete/:id', deleteCartItem);
router.post('/user/update/Pendding/:id', updatePenddingOrder);
router.get('/user/Pendding/:id', getuserPenddingOrder);
router.post('/user/Pendding/delete/:id', deletePenddingOrder);
router.post('/user/update/PaidList/:id', updatePaidList);
router.post('/user/update/cartitem/:id', updateCart);
router.get('/user/paidlist/:id', getPaidList);
router.post('/user/create/paidlist/:id', CreatePaidList);
router.post('/user/order/detail/:id', getDetailOrderList);
router.get('/users', getAllUser);
router.post('/user/update/RentRequest/:id', updateRentRquest);
router.get('/user/RentRequestlist/:id', getuserRequestlist);
router.post('/user/RentRequestlist/delete/:id', deleteRentRequest);
router.post('/user/RentRequestlist/update/:id', updateRent);
router.post('/user/RentList/:id', CreateRentList);
router.get('/user/AllRentList/:id', AllRequestList);
router.post('/user/RentList/delete/:id', deleteRentList);
router.post('/user/RentList/detail/:id', getRentDetail);
router.post('/user/RentList/update/:id', updateRentList);

module.exports = {
    routes: router
}