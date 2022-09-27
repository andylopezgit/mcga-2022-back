const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
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