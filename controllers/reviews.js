



var Restaurant = require('../models/restaurant');

module.exports = {
  create,
  edit,
  update,
  delete: deleteReview
  
 };

function create(req, res) {
  console.log(req.params.id)
  Restaurant.findById(req.params.id, function(err, restaurant) {
    console.log(restaurant)
    restaurant.reviews.push(req.body);
    restaurant.save(function(err) {
      if (err) console.log(req.body);
      res.redirect(`/restaurants/`);
    });
  });
}
      function deleteReview(req, res) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
          const review = restaurant.reviews.id(req.params.reviewid);
          if(!rev.createdBy.equals(req.user && req.user.id)) return res.redirect(`/restaurants/${restaurant._id}`);
          review.remove();
          restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`)
          });
        });
      }
      
      function edit(req, res) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
          const review = restaurant.reviews.id(req.params.reviewid);
          if(!review.createdBy.equals(req.user && req.user.id)) return res.redirect(`/restaurants/${restaurant._id}`);
          res.render('reviews/edit', {
            restaurantId: req.params.id,
            review,
            user: req.user 
          })
        });
      }
      
      // TODO write updateReview Function
      function update(req, res) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
          const review = restaurant.reviews.id(req.params.reviewid);
          console.log(review);
          review.set(req.body);
          restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`);
          });
        });
      }
      
      
    
