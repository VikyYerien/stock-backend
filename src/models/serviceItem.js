const mongoose = require('mongoose');
const priceSchema = require('./price');

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
    unitType: {
        type: String,
        required: true
    },
    ammount: {
        type: String,
        required: true
    },
    discounts: {
        type: [String],
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