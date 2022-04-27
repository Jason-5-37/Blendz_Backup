'use strict';

const firebase = require('../db');
const Product = require('../models/product');
const firestore = firebase.firestore();


const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('product').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('product');
        const data = await products.get();
        const productsArray = [];
        if(data.empty) {
            res.status(404).send('No product record found');
        }else {
            data.forEach(doc => {
                const product = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().price
                );
                productsArray.push(product);
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('product').doc(id);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('product with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getProducttype = async (req, res, next) => {
    try {
        const type = req.type;
        const product = await firestore.collection('product').doc(type);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('product with the given type not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    getProducttype
}