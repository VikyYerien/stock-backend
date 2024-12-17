const mongoose = require('mongoose');
const identifyerSchema = require('./identifiyer');

const OrganizationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    identifyer: {
        type: identifyerSchema,
        required: true
    },
    description: {
        type: String,
    },
    logoUrl: {
        type: String,
    },
    type: {
        type: String,
        required: true
    },
},
{ timestamps: true });

module.exports = mongoose.model('Organization', OrganizationSchema);