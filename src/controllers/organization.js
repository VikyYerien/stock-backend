const Organization =  require('../models/organization');

function getOrganizationList(req, res) {
    const { organizationId } = req.body;
    Organization.find({ organizationId }).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function getOrganizationById(req, res) {
    const id = req.params;
    Organization.findById(id).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

function editOrganization(req, res) {
    const id = req.params;
    const payload = req.body;
    Organization.findByIdAndUpdate(id, payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })       
}

function createOrganization(req, res) {
    const payload = req.body;
    Organization.create(payload).then(response => {
        res.status(200).send({response})
    }).catch(err =>{
        res.status(500).send({response: err})
    })
}

module.exports = {
    getOrganizationList,
    createOrganization,
    getOrganizationById,
    editOrganization
};