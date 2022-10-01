const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },  
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('products', ProductSchema);