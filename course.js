// import parser from xmldom package
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');

var parser, doc, tNode;
var i, obj, value;
var fullname, email;

fs.readFile('course.xml', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}

	parser = new xmldom();
	doc = parser.parseFromString(data, 'application/xml');
	tNode = doc.getElementsByTagName('surname');

	for (i in tNode) {
		// process current ith node
		obj = tNode[i];
		if (obj.firstChild) {
			value = obj.firstChild.nodeValue;
			if (value === 'Rai') {

				fullname = (obj.parentNode.getElementsByTagName('surname')[0].firstChild.nodeValue) + " " + (obj.parentNode.getElementsByTagName('othernames')[0].firstChild.nodeValue);
				email = (obj.parentNode.getElementsByTagName('email')[0].firstChild.nodeValue);

				console.log("Full name of lecturer Rai is: ", fullname);
                console.log("Email of lecturer Rai is: ", email);
			}
		}
	}
});
