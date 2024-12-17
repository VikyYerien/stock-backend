const express = require('express');
const {getCategories, getCategoryById, createCategory, editCategory, deleteCategory} = require('../controllers/category');
const {authenticateted} = require('../middleware/auth')

//const mdUser = multiparty({})
const app = express.Router();

app.get('/category-list/:id', authenticateted, getCategories);
app.get('/category/:id', authenticateted, getCategoryById);
app.post('/category/create', authenticateted, createCategory);
app.put('/category/:id', authenticateted, editCategory);
app.delete('/category/:id', authenticateted, deleteCategory);


module.exports = app;