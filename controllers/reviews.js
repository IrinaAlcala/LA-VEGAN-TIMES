



var User = require('../models/user');

module.exports = {
  create,
  // update
};

function create(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.favoriteRestaurants.reviews.push(req.body);
    console.log(user.favoriteRestaurant)
    console.log(req.body)

    user.favoriteRestaurants.save(function(err) {
      res.redirect(`/users/${user._id}/favoriteRestaurants`);
    });
  });
}

// function update(req, res) {
//   // Note the cool "dot" syntax to query on the property of a subdoc
//   User.findOne({'reviews._id': req.params.id}, function(err, userId) {
//     // Find the comment subdoc using the id method on Mongoose arrays
//     // https://mongoosejs.com/docs/subdocs.html
//     const reviewSubdoc = user.favoriteRestaurant.reviews.id(req.params.id);
//     // Ensure that the comment was created by the logged in user
//     if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${book._id}/favoriteRestaurants`);
//     // Update the text of the comment
//     reviewSubdoc.text = req.body.text;
//     // Save the updated book
//     user.favoriteRestaurant.save(function(err) {
//       // Redirect back to the book's show view
//       res.redirect(`/users/${User._id}/favoriteRestaurants`);
//     });
//   });
// }