var express = require('express');
var router = express.Router();

// require mashape's unirest for API's
var unirest = require('unirest');

/* GET weather page. */
router.get('/', function (req, res, next) {
	res.render('weather', { 
		title : 'Get-Weather'
	});
});

/* POST weather page. */
router.post('/post', function (req, res, next) {
	// These code snippets use an open-source library.
	var location = req.body.location;
	console.log('req.body:');
	console.log(req.body);

	// get location and then api call url
	var getUrl = "https://george-vustrey-weather.p.mashape.com/api.php?location=";
	// get list of words from the location string
	var wordList = location.split(' ');
	for (i in wordList) {
		// get each word
		// format into string of form:
		// string = "WORD1+WORD2+WORD3 ... "
		var word = wordList[i];
		if (i != wordList.length-1)
			getUrl += word + '+';
		else
			getUrl += word;
	}

	console.log('getUrl:');
	console.log(getUrl);
	unirest.get(getUrl)
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