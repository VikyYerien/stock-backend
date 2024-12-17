const express = require('express');
const {getBranchesList, getBranchById, createBranch, editBranch} = require('../controllers/branch');
const {authenticateted} = require('../middleware/auth')

const app = express.Router();

app.get('/branches-list', authenticateted, getBranchesList);
app.get('/getBranchById/:id', authenticateted, getBranchById);
app.post('/branch/create', authenticateted, createBranch);
app.put('/branch/:id', authenticateted, editBranch);


module.exports = app;