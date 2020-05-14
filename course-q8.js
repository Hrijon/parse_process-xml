// import parser from xmldom package
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');

var parser, doc, targetNodes;
var i;
var count = 0;
var word = "Internet";

fs.readFile('course.xml', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}

	parser = new xmldom();
	doc = parser.parseFromString(data, 'application/xml');
	targetNodes = doc.getElementsByTagName('unit');

    for(i=0; i < targetNodes.length; i++)
    {
        let title = targetNodes[i].getElementsByTagName('title');
        let lecturer = targetNodes[i].getElementsByTagName('lecturer');

        var tData = title[0].textContent;
        if(tData.includes(word))
        {
            console.log("The title is: ", title[0].textContent);
            count++;
        
            for(let j = 0; j<lecturer.length; j++)
            {
                let surname = lecturer[j].getElementsByTagName('surname')[0];
                let othernames = lecturer[j].getElementsByTagName('othernames')[0];
                let fullname = (surname.textContent + " " + othernames.textContent)
               
                console.log("The full name is: ", fullname);
            }
        }        
    }
    console.log("Total number of units containing Internet is: ", count);
});
