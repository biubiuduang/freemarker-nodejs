var express = require("express");
var router = express.Router();

var data = {
  name: 'hhehe',
  password: '1234',
  ddddd: '333333'
};

router.get("/",function(req,res,next){
  res.render('test',data);
});

module.exports = router;
