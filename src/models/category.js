const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
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

module.exports = mongoose.model('Category', categorySchema);