var express = require('express');
var router = express.Router();
// var menu = require('../data/menu');
// console.log(menu); // whb-lg
var data = {
  name: '卖鱼灿',
  age : 26,
  average :30,
  latestProduct: {
      url: '/list',
      name: 'list'
  }
};


/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log("data："+data);
	res.render('index',data);
});

module.exports = router;
