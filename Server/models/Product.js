const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const Product = new Schema({
    product_name: { type: String, required: true },
    product_quantity: { type: Number, required: true },
    product_desc: {type: String},
    product_price: {type: Number, required: true},
    product_image: {type: String},
    product_image1: {type: String},
    product_slug: {type: String, slug: 'product_name', unique: true},
}, {
    timestamps: true
});

mongoose.plugin(slug);

module.exports = mongoose.model('Product', Product); 