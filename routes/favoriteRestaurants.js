const express = require('express');
const router = express.Router();
const favoriteRestaurantsCtrl = require('../controllers/favoriteRestaurants');

router.get("/users/:id/favoriteRestaurants", favoriteRestaurantsCtrl.index);
router.post("/users/:id/favoriteRestaurants", favoriteRestaurantsCtrl.create);
router.delete("/users/:id/favoriteRestaurants/:restaurantId", isLoggedIn, favoriteRestaurantsCtrl.delete);
router.get("/users/:id/favoriteRestaurants/:restaurantId", isLoggedIn, favoriteRestaurantsCtrl.showUpdatePage);
router.put("/users/:id/favoriteRestaurants/:restaurantId", isLoggedIn, favoriteRestaurantsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;