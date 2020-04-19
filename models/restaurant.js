const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
     
});

const restaurantSchema = new Schema({
    restaurantName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    reviews: [reviewSchema]
     
    
   
});

module.exports = mongoose.model("Restaurant", restaurantSchema);