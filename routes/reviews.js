// const express = require("express");
// const router = express.Router();
// const reviewsCtrl = require("../controllers/reviews");


// router.post('/restaurants/:id/reviews', reviewsCtrl.create);
//  router.get("/visitedRestaurants/:restaurantId/reviews", isLoggedIn, reviewsCtrl.index);
// router.get("/visitedRestaurants/:restaurantId/reviews/new", isLoggedIn, reviewsCtrl.new);
//  router.post("/visitedRestaurants/:restaurantId/reviews", isLoggedIn, reviewsCtrl.addReview);

//  function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//      res.redirect('/auth/google');
//    }

// module.exports = router;
var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/users/:id/favoriteRestaurants/reviews', reviewsCtrl.create);

module.exports = router;