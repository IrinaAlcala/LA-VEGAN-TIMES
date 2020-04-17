const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    // restaurantName: {type: String, required: true},
    text: String
    
    // rating: String,
    
});

const restaurantSchema = new Schema({
    restaurantName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    reviews: [reviewSchema]
    // rating: {type: Number, min: 1, max: 5, default: 5}, 
    
   
});

module.exports = mongoose.model("Restaurant", restaurantSchema);