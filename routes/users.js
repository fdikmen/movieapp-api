var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')


//Models
const UserModel=require('../models/User')

/* GET users listing. */
router.get("/", function (req, res, next) {
  UserModel.find((err, data) => {
    if (err) res.json(err);
    res.json(data);
  })
});



router.post("/register", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    const newUser = new UserModel({ username, password:hash });
    newUser
      .save()
      .then((data) => { res.json(data);})
      .catch((err) => {res.json(err); });
  });
});

module.exports = router;
