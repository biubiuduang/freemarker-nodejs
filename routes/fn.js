var express = require('express');
var router = express.Router();

var data = {
	"name" : "john",
	"phone":"13800138000",
	"address":"xxxxx"
}

router.get("/",function(req,res,next){
	res.render("function",data);
});

module.exports = router;