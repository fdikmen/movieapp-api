var express = require('express');
var router = express.Router();
//Models
const UserModel=require('../models/User')

/* GET users listing. */
router.get("/", function (req, res, next) {
  UserModel.find((err, data) => {
    if (err) res.json(err);
    res.json(data);
  })
});



router.post('/register', (req, res) => {
  const {username,password} = req.body;
const newUser = new UserModel({username,password});
newUser.save()
         .then((data)=>{res.json(data)})
         .catch((err)=>{res.json(err)})

});

module.exports = router;
