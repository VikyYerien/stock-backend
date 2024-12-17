const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    type: String,  // por ejemplo, final, /hora, /kg, etc.
    ammount: String, 
    currency: String
});

module.exports = priceSchema;