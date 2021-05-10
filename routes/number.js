var express = require("express");
var router = express.Router();

var data = {
  name: 'hhehe',
  password: '1234'
};

router.get("/",function(req,res,next){
	res.render('number',data);
});

module.exports = router;
