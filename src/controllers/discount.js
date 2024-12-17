const Discount = require('../models/discount.js');

function getDiscounts(req, res) {
    const organizationId = req.params.id;
    Discount.find({ organizationId }).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function getDiscountById(req, res) {
    const id = req.params.id;
    Discount.findById(id).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function editDiscount(req, res) {
    const id = req.params.id;
    const payload = req.body;
    Discount.findByIdAndUpdate(id, payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })       
}

function createDiscount(req, res) {
    const payload = req.body;
    Discount.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function deleteDiscount(req, res) {
    const id = req.params.id;
    Discount.findByIdAndDelete(id).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

module.exports = {
    getDiscounts,
    createDiscount,
    getDiscountById,
    editDiscount,
    deleteDiscount
};

//se puede enviar cualquier cosa hardcodeada de esta manera res.send({ok: 'works!'}) se envia lo de adentro de ()