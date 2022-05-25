'use strict';

const firebase = require('../db');
const Machine = require('../models/machine');
const firestore = firebase.firestore();


const addMachine = async (req, res, next) => {
    try {
        const data = req.body;
        const docID = req.body.name;
        await firestore.collection('machine').doc(docID).set(data);
        res.send('Machine Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateMachine = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const machine =  await firestore.collection('machine').doc(id);
        await machine.update(data);
        res.send('Machine record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getAllMachine = async (req, res, next) => {
    try {
        const machines = await firestore.collection('machine');
        const data = await machines.get();
        const machinesArray = [];
        if(data.empty) {
            res.status(404).send('No machine record found');
        }else {
            data.forEach(doc => {
                const machine = new Machine(
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
                machinesArray.push(machine);
            });
            res.send(machinesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getMachine = async (req, res, next) => {
    try {
        const id = req.params.id;
        const machine = await firestore.collection('machine').doc(id);
        const data = await machine.get();
        if(!data.exists) {
            res.status(404).send('machine with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteMachine = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('machine').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addMachine,
    getAllMachine,
    getMachine,
    updateMachine,
    deleteMachine
}