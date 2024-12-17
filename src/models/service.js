const mongoose = require('mongoose');
const priceSchema = require('./price');
const discountItem = require('./discountItem')

const serviceSchema = mongoose.Schema({
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
        type: [discountItem],
    },
    categoryId: {
        type: String,
        required: true
    },
    branchId: {
        type: String,
    },
    organizacionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion'
    },
},
{ timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);