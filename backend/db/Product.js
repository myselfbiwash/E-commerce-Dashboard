const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    company:String,
    number:Number,
    userId: ObjectId,

});

module.exports = mongoose.model("products",productSchema);
