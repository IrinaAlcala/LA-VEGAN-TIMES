


var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');


router.post('/restaurants/:id/reviews', reviewsCtrl.create);
router.put('/reviews/:id/', reviewsCtrl.update);
router.delete('/reviews/:id', reviewsCtrl.delete);
module.exports = router;