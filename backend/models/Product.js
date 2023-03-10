const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    auto: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock:{
        type: Number,
        required: true,
    },
    imageUrl1: {
        type: String,
        required: true,
    },
    imageUrl2: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;