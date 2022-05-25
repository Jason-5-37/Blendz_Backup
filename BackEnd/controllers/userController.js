'use strict';

const firebase = require('../db');
const User = require('../models/user');
const Cart = require('../models/cart');
const Rent = require('../models/rent');
const firestore = firebase.firestore();

//USER API---------------------------------------------------------------------------------------------------

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.body.id;
        await firestore.collection('user').doc(id).set(data);
        res.send('User Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('user').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('User with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const users = await firestore.collection('user');
        const data = await users.get();
        const usersArray = [];
        if(data.empty) {
            res.status(404).send('No users record found');
        }else {
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().name,
                    doc.data().email,
                    doc.data().Pendding,
                    doc.data().RentRequest,
                    doc.data().ShippingAddress
                );
                usersArray.push(user);
            });
            res.send(usersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('user').doc(id);
        await user.update(data);
        res.send('User record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Cart API---------------------------------------------------------------------------------------------------

const updateUserCart = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        await firestore.collection('user').doc(uid).collection('cart').doc(itemID).set(data);
        res.send('Cart record save successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCart = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        const cart = await firestore.collection('user').doc(uid).collection('cart').doc(itemID);
        await cart.update(data);
        res.send('Cart record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getuserCart = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const carts = await firestore.collection('user').doc(uid).collection('cart');
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No item in cart');
        }else {
            data.forEach(doc => {
                const cart = new Cart(
                    doc.id,
                    doc.data().number,
                    doc.data().Price,
                    doc.data().orderID,
                    doc.data().ShippingAddress
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCartItem = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        await firestore.collection('user').doc(uid).collection('cart').doc(itemID).delete();
        res.send('Item deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Pendding Order API---------------------------------------------------------------------------------------------------

const updatePenddingOrder = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        await firestore.collection('user').doc(uid).collection('PenddingOrder').doc(itemID).set(data);
        res.send('PenddingOrder record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getuserPenddingOrder = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const carts = await firestore.collection('user').doc(uid).collection('PenddingOrder');
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No item in PenddingOrder');
        }else {
            data.forEach(doc => {
                const cart = new Cart(
                    doc.id,
                    doc.data().number,
                    doc.data().Price
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePenddingOrder = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        await firestore.collection('user').doc(uid).collection('PenddingOrder').doc(itemID).delete();
        res.send('Item deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//-------------------------------------------------------------------------

const CreatePaidList = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const data = req.body;
        const orderID = req.body.orderID;
        await firestore.collection('user').doc(uid).collection('PaidList').doc(orderID).set(data);
        res.send('Paid list create successfully');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePaidList= async (req, res, next) => {
    try {
        const id = req.body.id;
        const orderID = req.body.orderID;
        const uid = req.params.id;
        const data = req.body;
        await firestore.collection('user').doc(uid).collection('PaidList').doc(orderID).collection("order").doc(id).set(data);
        res.send('PaidList record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPaidList = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const carts = await firestore.collection('user').doc(uid).collection('PaidList');
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No item in Paid list');
        }else {
            data.forEach(doc => {
                const cart = new Cart(
                    doc.id
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getDetailOrderList = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const orderID = req.body.id;
        const carts = await firestore.collection('user').doc(uid).collection('PaidList').doc(orderID).collection("order");
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No order list');
        }else {
            data.forEach(doc => {
                const cart = new Cart(
                    doc.id,
                    doc.data().number,
                    doc.data().Price,
                    doc.data().orderID,
                    doc.data().ShippingAddress
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//-------------------------------------------------------------------------


const updateRentRquest = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        await firestore.collection('user').doc(uid).collection('RentRequest').doc(itemID).set(data);
        res.send('RentRequest record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRent = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        const cart = await firestore.collection('user').doc(uid).collection('RentRequest').doc(itemID);
        await cart.update(data);
        res.send('RentRequest record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const getuserRequestlist = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const carts = await firestore.collection('user').doc(uid).collection('RentRequest');
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No item in PenddingOrder');
        }else {
            data.forEach(doc => {
                const cart = new Rent(
                    doc.id,
                    doc.data().Quantity,
                    doc.data().TotalPrice,
                    doc.data().orderID,
                    doc.data().StartDate,
                    doc.data().EndDate                    
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRentRequest = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        await firestore.collection('user').doc(uid).collection('RentRequest').doc(itemID).delete();
        res.send('Item deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//---------------------------------------------------------------

const CreateRentList = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        await firestore.collection('user').doc(uid).collection('RentList').doc(itemID).set(data);
        res.send('RentList record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRentDetail = async (req, res, next) => {
    try {
        const RentID = req.body.id;
        //const RentID = req.body.RentID;
        const uid = req.params.id;
        const user = await firestore.collection('user').doc(uid).collection('RentList').doc(RentID);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('Rent detail with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const AllRequestList = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const carts = await firestore.collection('user').doc(uid).collection('RentList');
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No item in PenddingOrder');
        }else {
            data.forEach(doc => {
                const cart = new Rent(
                    doc.id,
                    doc.data().number,
                    doc.data().TotalPrice,
                    doc.data().orderID,
                    doc.data().StartDate,
                    doc.data().EndDate,
                    doc.data().State,
                    doc.data().ShippingAddress
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const deleteRentList= async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        await firestore.collection('user').doc(uid).collection('RentList').doc(itemID).delete();
        res.send('Item deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRentList = async (req, res, next) => {
    try {
        const data = req.body;
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const user =  await firestore.collection('user').doc(uid).collection('RentList').doc(itemID);
        await user.update(data);
        res.send('updateRentList record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
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
    updateRentList
}