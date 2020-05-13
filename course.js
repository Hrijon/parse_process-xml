// import parser from xmldom package
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');

var parser, doc, targetNodes;
var i, targetObj, fcObj;

fs.readFile('course.xml', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}

	parser = new xmldom();
	doc = parser.parseFromString(data, 'application/xml');
	targetNodes = doc.getElementsByTagName('surname');

	for (i in targetNodes) {
		// process current ith node
		targetObj = targetNodes[i];
		if (targetObj.firstChild) {
			fcObj = targetObj.firstChild.nodeValue;
			if (fcObj === 'Rai') {
                // console.log(targetObj.parentNode.getElementsByTagName('surname')[0].firstChild.nodeValue);
                console.log((targetObj.parentNode.getElementsByTagName('surname')[0].firstChild.nodeValue) + " " + (targetObj.parentNode.getElementsByTagName('othernames')[0].firstChild.nodeValue));
                console.log(targetObj.parentNode.getElementsByTagName('email')[0].firstChild.nodeValue);

			}
		}
	}
});
