



var Restaurant = require('../models/restaurant');

module.exports = {
  create,
  update,
   edit,
  delete: deleteReview
  
 };

function create(req, res) {
  console.log(req.params.id)
  Restaurant.findById(req.params.id, function(err, restaurant) {
    console.log(restaurant)
    // req.body.createdBy = req.user._id;
        req.body.userName = req.user.name;
        console.log(req.body.userName);
    restaurant.reviews.push(req.body);
    restaurant.save(function(err) {
      if (err) console.log(req.body);
      // res.redirect(`/restaurants/:id/reviews/${review._id}`);
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}
      function deleteReview(req, res) {
        Restaurant.findById(req.params.restaurantId, function(err, restaurant) {
          console.log(err)
          const review = restaurant.reviews.id(req.params.reviewId);
          // if(!review.createdBy.equals(req.user && req.user.id)) return res.redirect(`/restaurants/${restaurant._id}`);
        review.remove();
          restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`)
          });
        });
      }
      function edit(req, res) {
        Restaurant.findOne(req.params.id, function(err, restaurant) {
          const review = restaurant.reviews.id(req.params.id);
         } )  
        }

      
      function update(req, res) {
        Restaurant.findOne(req.params.id, function(err, restaurant) {
          const review = restaurant.reviews.id(req.params.id);
          console.log(review);
          // if(!reviewSubdoc.createdBy.equals(req.user && req.user.id)) return res.redirect(`/restaurants/${restaurant._id}`);
        req.body.createdBy = req.user._id;
        reviewSubdoc.content = req.body.content;
          restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`);
          });
        });
      }
      
      
    
