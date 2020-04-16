const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    restaurantName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    // rating: {type: Number, min: 1, max: 5, default: 5}, 
    
   
});

module.exports = mongoose.model("Restaurant", restaurantSchema);