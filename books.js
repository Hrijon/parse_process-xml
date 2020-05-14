// import parser from xmldom package
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');

var parser, doc, targetNodes;
var i, targetObj, fcObj;

// use fs to read xml document
fs.readFile('books.xml', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}

	// construct parser
	parser = new xmldom();
	// call method to parse document - not the type
	doc = parser.parseFromString(data, 'application/xml');

	// use DOM Node method
	targetNodes = doc.getElementsByTagName('genre');

	// go through all returned nodes
	for (i in targetNodes) {
		// process current ith node
		targetObj = targetNodes[i];
		// if it is the firstchild
		if (targetObj.firstChild) {
			// obtain the node value
			fcObj = targetObj.firstChild.nodeValue;
			// compare this the the target genre
			if (fcObj === 'Computer') {
				// display the book 'title' corresponding to the identified target
				// NOTE: you need to work out this line as it is typical usage of the DOM methods
				console.log(targetObj.parentNode.getElementsByTagName('title')[0].firstChild.nodeValue);
			}
		}
	}
});
