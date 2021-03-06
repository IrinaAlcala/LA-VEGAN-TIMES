const Restaurant = require("../models/restaurant");
// const User = require("../models/user");

module.exports = {
  index,
  showNewPage,
  create,
  show
};
function index(req, res) {
  Restaurant.find({}, function(err, restaurants) {
    if (err) return next(err);
    res.render("restaurants/index", { 
      restaurants,
      user: req.user });
  });
}
function showNewPage(req,res){
  Restaurant.find({}, function(err, restaurants) {
    if (err) return next(err);
    res.render("restaurants/new", { 
      restaurants,
      user: req.user });
  });
}
function show(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    res.render("restaurants/show", {
      title: 'Restaurant Detail', restaurant,
      user: req.user
    });
  });
}

function create(req,res){
  console.log(req.body);
  Restaurant.create(req.body, function(err, restaurants){
    res.redirect("/restaurants")
    user: req.user
  });
}