var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:'Dummy'
    },
    Quantity:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }

})

const Product = new mongoose.model('Product',productSchema);
module.exports = Product;
    
