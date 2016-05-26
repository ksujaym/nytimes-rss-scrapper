var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = process.argv[2];
var data = "";

var server = app.listen(3000, function() {
	console.log("Listening on port 3000");
});

app.get('/', function(req, res) {
	request(url, function(error, response, html) {
		if(!error && response.statusCode == 200) {
			res.send(html);
			var $ = cheerio.load(html, {xmlMode: true});
			var link = $('item link').each(function(i, elem) {
				// console.log('i = ' + i);
				var href = $(this).text();
				href += '\n';
				data += href;				
			});

			fs.writeFile('log.txt', data, function(err) {
				if(err)
					return console.log(err);
				console.log('Written to log.txt\n');
			});
		}
	});
});
