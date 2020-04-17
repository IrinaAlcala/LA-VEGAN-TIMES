const User = require("../models/user");
module.exports = {
    index,
    create,
    delete: deleteRestaurant,
    showUpdatePage,
    update
}
function index(req, res) {
    User.find({}, function(err, users) {
      if (err) return next(err);
      res.render("users/favoriteRestaurants", { 
          users,
          user: req.user }); 
    });
  }
function create(req,res){
    User.findById(req.params.id, function(err,user){
        console.log(req.body);
        user.favoriteRestaurants.push(req.body);
        user.save(function(err){
            res.redirect(`/users/${user._id}/favoriteRestaurants`);
        })
    })
}
function deleteRestaurant(req,res){
    restauantId = req.params.restaurantId;
    const restaurant = req.user.favoriteRestaurants.id(restaurantId);
    User.findById(req.params.id, function(err,user){
        index = req.user.favoriteRestaurants.findIndex(restaurant => restaurant._id == restaurantId)
        user.favoriteRestaurants.splice(index,1)
        user.save(function(err){
            res.redirect(`/users/${user._id}/favoriteRestaurants`);
        })    
    })

}


 function showUpdatePage(req,res){
    restaurantId = req.params.restaurantId;
    const restaurant = req.user.favoriteRestaurants.id(restaurantId);
    user = req.user.favoriteRestaurants.findIndex(restaurant => restaurant._id == restaurantId)
        
     User.findById(req.params.id, function(err,users){
        
        res.render("users/updateRestaurant",{
           
            users,
            user: req.user,
            restaurant: restaurant,
            restaurantId: restaurantId
        })
    })
}
function update(req,res){
    restaurantId = req.params.restaurantId;
    const restaurant = req.user.favoriteRestaurants.id(restaurantId);
    User.findById(req.params.id, function(err,user){
        
        index = req.user.favoriteRestaurants.findIndex(restaurant => restaurant._id == restaurantId)
        user.favoriteRestaurants.splice(index,1,req.body)
        user.save(function(err){
            res.redirect(`/users/${user._id}/favoriteRestaurants`);
        })
    })
}