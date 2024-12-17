const mongoose = require('mongoose');
const identifyerSchema = require('./identifiyer');


const UserSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    identifyer: {
        type: identifyerSchema,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
        //required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    active: {
        type: Boolean,
        default: true
    },
    passWord: {
        type: String,
    },
    token: {
        type: String,
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    },
    branchId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Branch'
    },
});

module.exports = mongoose.model('User', UserSchema)