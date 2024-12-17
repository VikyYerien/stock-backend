const Product = require('../models/product.js');

function getProducts(req, res) {
    const organizationId = req.params.id;
    console.log(req.params.id)
    Product.find({ organizationId }).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function getProductById(req, res) {
    const id = req.params.id;
    Product.findById(id).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function editProduct(req, res) {
    const id = req.params.id;
    const payload = req.body;
    Product.findByIdAndUpdate(id, payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })       
}

function createProduct(req, res) {
    const payload = req.body;
    Product.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function deleteProduct(req, res) {
    const id = req.params.id;
    Product.findByIdAndDelete(id).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    editProduct,
    deleteProduct
};

//se puede enviar cualquier cosa hardcodeada de esta manera res.send({ok: 'works!'}) se envia lo de adentro de ()