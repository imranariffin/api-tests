var express = require('express');
var router = express.Router();

// require 'request' for API calls
var request = require('request');

// facebook graph api setup
var access_token = 'CAACEdEose0cBAAwYu36TSgVqPJ3a6NDLeyxECO1puh7K9eSQBZATPM1TWGIx9xiVvqwayM4YtmaAeu9qwIbCrOwqlwX6DI1n4Jwm1F695fweI7SPf3t7R13W3KW5kcZBocUYFwZBZAYFrYIvqJsIrW8icN0gmHPf2FfIAJeV8u3uVRU5ku0QLFNTLMXtAdbY45iH1EV24ZADEWbBkLEjrFqgBP5GXPgIZD';
var appKey = '';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('facebook-graph');
});

/* GET /me facebook profile. */
router.get('/me', function (req, res, next) {

	var apiRoute = 'https://graph.facebook.com/me?access_token=';
	apiRoute += access_token;

	request(apiRoute, function (err, response, body) {
		if (!err) {
			// res.render('index', {
			// 	me : response,
			// 	title : 'facebook-graph/me'
			// });
			res.send(body);
			// res.send(response);
			// res.render()
		} else {
			res.send(err);
		}
	});

});

module.exports = router;
