const User =  require('../models/user');
const {hashPass} = require('../utils/utils.js');

function getUsers(req, res) {
    const organizationId = req.params.id;
    console.log(organizationId)
    User.find({ organizationId }).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function getUserById(req, res) {
    const id = req.params.id;
    User.findById(id).then(response => {
        res.status(200).send(response)
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function editUser(req, res) {
    const id = req.params.id;
    const payload = req.body;
    if (payload.passWord) payload.passWord = hashPass(payload.passWord);
    User.findByIdAndUpdate(id, payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })       
}

function createUsers(req, res) {
    const payload = req.body;
    if(payload.passWord) payload.passWord = hashPass(payload.passWord)
    User.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function deleteUser(req, res) {
    const id = req.params.id;
    console.log(id)
    User.findByIdAndDelete(id).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

module.exports = {
    getUsers,
    createUsers,
    getUserById,
    editUser,
    deleteUser
};

//se puede enviar cualquier cosa hardcodeada de esta manera res.send({ok: 'works!'}) se envia lo de adentro de ()