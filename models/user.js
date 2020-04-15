const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteRestaurantSchema = new Schema({
    restaurantName: String,
    address: String,
    city: String,
    
    reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]
 });
const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    favoriteRestaurants: [favoriteRestaurantSchema]
});

module.exports = mongoose.model("User", userSchema);