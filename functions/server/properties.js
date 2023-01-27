const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertiesSchema = new Schema({
    title: String,
    address: String,
    description: Array,
    images: Array,
    price: String,
    coverImage: String,
    availability: String
});

module.exports = mongoose.model('Properties', PropertiesSchema)