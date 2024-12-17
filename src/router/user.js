const express = require('express');
const multiparty = require('connect-multiparty')
const {getUsers, getUserById, createUsers, editUser, deleteUser} = require('../controllers/user');
const {authenticateted} = require('../middleware/auth')

const mdUser = multiparty({})
const app = express.Router();

app.get('/users-list/:id', authenticateted, getUsers);
app.get('/users/:id', authenticateted, getUserById);
app.post('/users/create', [authenticateted, mdUser], createUsers);
app.put('/users/:id', [authenticateted, mdUser], editUser);
app.delete('/users/:id', [authenticateted], deleteUser);


module.exports = app;