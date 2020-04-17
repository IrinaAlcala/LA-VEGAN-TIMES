const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    // restaurantName: {type: String, required: true},
    text: String,
    
    // rating: String,
    
});
const favoriteRestaurantSchema = new Schema({
    restaurantName: String,
    address: String,
    city: String,
    review: [reviewSchema]
        
    
 });
const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    favoriteRestaurants: [favoriteRestaurantSchema],
    
});

module.exports = mongoose.model("User", userSchema);