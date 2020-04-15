
// const Review = require("../models/review");
// const User = require("../models/user");

// module.exports={
//     index,
//     addReview: create,
//     new: newReview,
    
// }


// function index(req,res) {
    

//     restaurantId = req.params.restaurantId;
//     const restaurant = req.user.visitedRestaurants.id(restaurantId);
//     req.user
//      .populate('visitedRestaurants.reviews')
//      .exec(function(err){
//         console.log('index');
        
//         res.render("reviews/index", {
//             user: req.user,
//             restaurantId: restaurantId,
//             restaurant: restaurant
            
//     })
//     });
    
// }
// function newReview(req,res){
//     res.render("reviews/new",{
//         user: req.user,
//         restaurantId: req.params.restaurantId
//     })
// }
// function create(req,res){
//     restaurantId = req.params.restaurantId;
//     const restaurant = req.user.visitedRestaurants.id(restaurantId);
//     Review.create(req.body, function(err, review){
//         restaurant.reviews.push(review._id);
//         req.user.save(function(err){
            
//                 res.redirect(`/visitedRestaurants/${restaurantId}/reviews`)
//             });
//         })  
//     }//)
