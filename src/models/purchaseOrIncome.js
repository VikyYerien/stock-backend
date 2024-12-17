const mongoose = require('mongoose');
const ProductItem = require ('../models/productItem')
const ServiceItem = require ('../models/serviceItem')
const discountItem = require('./discountItem')

const purchaseOrIncomeSchema = mongoose.Schema({
    productItems: {
        type: [ProductItem],
    },
    services: {
        type:[ServiceItem],
    },
    totalAmmount: {
        type: String,
    },
    branchId: {
        type: String,
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion'
    },
    discounts: {
        type: [discountItem],
    },
},
{ timestamps: true });

module.exports = mongoose.model('PurchaseOrIncome', purchaseOrIncomeSchema);