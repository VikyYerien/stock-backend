const express = require('express');
const {getDiscounts, getDiscountById, createDiscount, editDiscount, deleteDiscount} = require('../controllers/discount');
const {authenticateted} = require('../middleware/auth')

const app = express.Router();

app.get('/discount-list/:id', authenticateted, getDiscounts);
app.get('/discount/:id', authenticateted, getDiscountById);
app.post('/discount/create', authenticateted, createDiscount);
app.put('/discount/:id', authenticateted, editDiscount);
app.delete('/discount/:id', authenticateted, deleteDiscount);


module.exports = app;