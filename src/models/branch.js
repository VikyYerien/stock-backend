const mongoose = require('mongoose');

const BranchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizacion'
    },
},
{ timestamps: true });

module.exports = mongoose.model('Branch', BranchSchema);