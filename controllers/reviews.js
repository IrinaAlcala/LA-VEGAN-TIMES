



var User = require('../models/user');

module.exports = {
  create
};

function create(req, res) {
  User.findById(req.params.id, function(err, userId) {
    user.favoriteRestaurants.reviews.push(req.body);
    user.save(function(err) {
      res.redirect(`/users/${user._id}/favoriteRestaurants`);
    });
  });
}