const Category = require('../models/category.js');

function getCategories(req, res) {
    const organizationId = req.params.id;
    Category.find({ organizationId }).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function getCategoryById(req, res) {
    const id = req.params.id;
    Category.findById(id).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function editCategory(req, res) {
    const id = req.params.id;
    const payload = req.body;
    Category.findByIdAndUpdate(id, payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })       
}

function createCategory(req, res) {
    const payload = req.body;
    Category.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function deleteCategory(req, res) {
    const id = req.params.id;
    Category.findByIdAndDelete(id).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

module.exports = {
    getCategories,
    createCategory,
    getCategoryById,
    editCategory,
    deleteCategory
};

//se puede enviar cualquier cosa hardcodeada de esta manera res.send({ok: 'works!'}) se envia lo de adentro de ()