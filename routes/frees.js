var express = require('express');
var router = express.Router();

var data = {
    user: 'joe',
    latestProduct: {
        url: 'products/greenmouse.html',
        name: 'mouse'
    }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a free resource');
});

module.exports = router;