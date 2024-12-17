const Branch =  require('../models/branch');

function getBranchesList(req, res) {
    const { organizationId } = req.body;
    Branch.find({ organizationId }).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function getBranchById(req, res) {
    const id = req.params;
    Branch.findById(id).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function editBranch(req, res) {
    const id = req.params;
    const payload = req.body;
    Branch.findByIdAndUpdate(id, payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })       
}

function createBranch(req, res) {
    const payload = req.body;
    Branch.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

module.exports = {
    getBranchesList,
    createBranch,
    getBranchById,
    editBranch
};

//se puede enviar cualquier cosa hardcodeada de esta manera res.send({ok: 'works!'}) se envia lo de adentro de ()