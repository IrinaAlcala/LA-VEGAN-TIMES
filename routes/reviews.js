


var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/restaurants/:restaurantId/reviews/:reviewId', reviewsCtrl.update);
router.post('/restaurants/:id/reviews', reviewsCtrl.create);
router.put('/restaurants/:restaurantId/reviews/:reviewId', reviewsCtrl.update);

router.delete('/restaurants/:restaurantId/reviews/:reviewId', reviewsCtrl.delete);
module.exports = router;