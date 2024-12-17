const mongoose = require('mongoose');
const identifyerSchema = require('./identifiyer');
const priceSchema = require('./price');
const categorySchema = require('./category')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: priceSchema,
        required: true
    },
    discounts: {
        type: [String],
    },
    imgUrls: {
        type: [String],
    },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category'
    // },
    categoryId: {
        type: String
    },
    code: {
        type: String,
        required: true
    },
    branchId: {
        type: String,
    },
    stock: {
        type: String,
        required: true
    },
    batchNumber: {
        type: identifyerSchema,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion'
    },
},
{ timestamps: true });

module.exports = mongoose.model('Product', productSchema);