const express = require('express');
//desinstalar multiparty luego, es para subir archivos
const multiparty = require('connect-multiparty')
const {register, login, refresh} = require('../controllers/auth');

const mdUser = multiparty({})
const app = express.Router();

app.post('/register', mdUser, register);
app.post('/login', login);
app.post('/refresh', refresh)

module.exports = app;