const mongoose = require('mongoose');

const discountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    percentage: {
        type: String,

    },
    ammount: {
        type:{
            currency: String,
            ammount: String
        }
    },
    branchId: {
        type: String,
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion'
    },
},
{ timestamps: true });

module.exports = mongoose.model('Discount', discountSchema);