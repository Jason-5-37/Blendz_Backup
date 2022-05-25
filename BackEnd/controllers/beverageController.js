'use strict';

const firebase = require('../db');
const Beverage = require('../models/beverage');
const firestore = firebase.firestore();


const addBeverage = async (req, res, next) => {
    try {
        const data = req.body;
        const docID = req.body.name;
        await firestore.collection('beverage').doc(docID).set(data);
        res.send('Beverage Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateBeverage= async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const beverage =  await firestore.collection('beverage').doc(id);
        await beverage.update(data);
        res.send('beverage record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const getAllBeverage = async (req, res, next) => {
    try {
        const beverages = await firestore.collection('beverage');
        const data = await beverages.get();
        const beveragesArray = [];
        if(data.empty) {
            res.status(404).send('No beverage record found');
        }else {
            data.forEach(doc => {
                const beverage = new Beverage(
                    doc.id,
                    doc.data().name,
                    doc.data().price,
                    doc.data().imgUrl,
                    doc.data().description,
                    doc.data().type,
                    doc.data().priceforPay,
                    doc.data().pdfUrl,
                    doc.data().VideoUrl
                );
                beveragesArray.push(beverage);
            });
            res.send(beveragesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBeverage = async (req, res, next) => {
    try {
        const id = req.params.id;
        const beverage = await firestore.collection('beverage').doc(id);
        const data = await beverage.get();
        if(!data.exists) {
            res.status(404).send('beverage with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBeverage = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('beverage').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addBeverage,
    getAllBeverage,
    getBeverage,
    updateBeverage,
    deleteBeverage
}