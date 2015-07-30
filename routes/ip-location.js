var express = require('express');
var router = express.Router();

var ipware = require('ipware');
var getIp = ipware().get_ip;

/* GET home page. */
router.get('/ip-location', function(req, res, next) {
  // res.render('index', { title: 'ipLocation' });
  var ipInfo = getIp(req);
  console.log(ipInfo);
  res.send(ipInfo);
});

module.exports = router;

