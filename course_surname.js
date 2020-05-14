// import parser from xmldom package
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');

var parser, doc, targetNodes;
var i, targetObj, fcObj;
var word = "Internet";

fs.readFile('course.xml', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}

	parser = new xmldom();
	doc = parser.parseFromString(data, 'application/xml');
	targetNodes = doc.getElementsByTagName('unit');

    for(let i=0; i < targetNodes.length; i++)
    {
        let lecturer = targetNodes[i].getElementsByTagName('lecturer');
        for(let j = 0; j<lecturer.length; j++)
        {
            let surname = lecturer[j].getElementsByTagName('surname')[0];
            console.log("The surname is: ", surname.textContent);
        }        
    }
    
});
