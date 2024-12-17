const express = require('express');
const {getProducts, getProductById, createProduct, editProduct, deleteProduct} = require('../controllers/product');
const {authenticateted} = require('../middleware/auth')

//const mdUser = multiparty({})
const app = express.Router();

app.get('/product-list/:id', authenticateted, getProducts);
app.get('/product/:id', authenticateted, getProductById);
app.post('/product/create', authenticateted, createProduct);
app.put('/product/:id', authenticateted, editProduct);
app.delete('/product/:id', authenticateted, deleteProduct);


module.exports = app;