const express = require('express');
const {getOrganizationList, getOrganizationById, createOrganization, editOrganization} = require('../controllers/organization');
const {authenticateted} = require('../middleware/auth')

const app = express.Router();

app.get('/organization-list', authenticateted, getOrganizationList);
app.get('/getOrganizationById/:id', authenticateted, getOrganizationById);
app.post('/organization/create', createOrganization);
app.put('/organization/:id', authenticateted, editOrganization);

module.exports = app;