var express = require("express");
var router = express.Router();
var movieModel = require("../models/Movie");

/* GET movies listing. */
router.get("/", function (req, res, next) {
  movieModel.find((err, data) => {
    if (err) res.json(err);
    res.json(data);
  })
});

/*POST a movie. */
router.post("/", (req, res) => {
  var newMovie = new movieModel(req.body);
  newMovie.save((err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

module.exports = router;