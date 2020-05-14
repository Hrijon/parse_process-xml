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

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function userInp(){
        rl.question('Enter element name(string only)? ', (answer) => {
            
            console.log(isNaN(answer));
            if (isNaN(answer))
            {
                console.log(`your element name is: ${answer}`);

                for(let j = 0; j<targetNodes.length; j++)
                {
                    let nodeValue = targetNodes[j].getElementsByTagName(answer)[0];
                    console.log("Your elements are: ", nodeValue.textContent);
                }                  
            }
            else
            {
                console.log("Please enter valid element name.");
            }
            rl.close();
        });
    }

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
    userInp();

});
