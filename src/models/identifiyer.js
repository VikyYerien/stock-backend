const mongoose = require('mongoose');

const identifyerSchema = new mongoose.Schema({
    type: String,  // tipo de identificador, por ejemplo, DNI, RUC, Passport, CUIT, CUIL etc.
    value: String, 
});

module.exports = identifyerSchema;