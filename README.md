# nytimes-rss-scrapper

A simple crawler for scrapping links on RSS feeds.

Modules Used
	express:	server requests
	request:	connection to the RSS feed link
	cheerio:	parsing the xml
	fs:		writing to the file

Input:
	Link to the RSS feed page
	Example links:	http://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml
			http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml

Output
	Links to all the news articles on the RSS feed are written to the file 'log.txt'

Usage
	node main.js full-link-to-the-rss-feed

Known Issues
	server.close() not working.
