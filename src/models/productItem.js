const mongoose = require('mongoose');
const discountItem = require('./discountItem');

const productItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    unitType:{
        type: String,
        required: true
    },
    ammount:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discounts: {
        type: [discountItem],
    },
    imgUrls: {
        type: [String],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    code: {
        type: String,
        required: true
    },
    branchId: {
        type: String,
    },
    batchNumber: {
        type: identifyerSchema,
        required: true
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion'
    },
},
{ timestamps: true });

module.exports = mongoose.model('ProductItem', productItemSchema);