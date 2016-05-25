var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = process.argv[2];
// console.log('url = ' + url);
var data = "";

app.get('/', function(req, res) {
	// url = "http://timesofindia.indiatimes.com/rssfeedstopstories.cms";
	// console.log(url);
	request(url, function(error, response, html) {
		if(!error && response.statusCode == 200) {
			res.send(html);
			var $ = cheerio.load(html, {xmlMode: true});
			// console.log('cheerio loaded');
			var link = $('item link').each(function(i, elem) {
				// console.log('i = ' + i);
				var href = $(this).text();
				href += '\n';
				data += href;				
			});
			fs.writeFile('log.txt', data, function(err) {
				console.log('written to log.txt\n');
				if(err)
					return console.log(err);
				server.close();
			});
		}
	});
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});
