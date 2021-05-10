var express = require('express');
var router = express.Router();

var data = {
  animals: [
    "mouse",
    "elephant",
    "python",
    "dog"
  ],
  cats: [],
  dogs: [
    {
      index: 1,
      name: "旺财"
    },
    {
      index: 2,
      name: "内瑟斯"
    },
    {
      index: 3,
      name: "萨摩耶"
    }
  ]
}

router.get("/", function (req, res, next) {
  res.render('list', data);
});

module.exports = router;
