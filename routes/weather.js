var express = require('express');
var router = express.Router();

// require mashape's unirest for API's
var unirest = require('unirest');

/* GET weather page. */
router.get('/', function (req, res, next) {
	res.render('weather', { 
		title : 'Get-Weather',
		location : req.body.location
	});
});

/* POST weather page. */
router.post('/post', function (req, res) {
	// These code snippets use an open-source library.
	var location = req.body.location;
	console.log('req.body:');
	console.log(req.body);
	var getUrl = "https://george-vustrey-weather.p.mashape.com/api.php?location=";
	getUrl += encodeURIComponent(req.body.location);
	console.log('getUrl:');
	console.log(getUrl);
	unirest.get("https://george-vustrey-weather.p.mashape.com/api.php?location=Los+Angeles")
	.header("X-Mashape-Key", "OTrWTrbM5FmshmvBmac7zTvO3ByZp1jiVeAjsnFUghbHFZW2I8")
	.header("Accept", "application/json")
	.end(function (result) {
	  console.log(result.status, result.headers, result.body);
	  var weatherList = result.body;
	  res.render('weather', 
	  	{
	  		location : location,
	  		weatherList : weatherList,
	  		title : 'Get-Weather-POST'
	  	});
	});
});

module.exports = router;