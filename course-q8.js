// import parser from xmldom package
var xmldom = require('xmldom').DOMParser;
var fs = require('fs');

var parser, doc, tNodes, course;
var i;
var count = 0;
var word = "Internet";

fs.readFile('course.xml', 'utf-8', function (err, data) 
{
    if (err)
    {
        throw err;
    }

	parser = new xmldom();
	doc = parser.parseFromString(data, 'application/xml');
    tNodes = doc.getElementsByTagName('unit');
    course = doc.getElementsByTagName('course');

    const readline = require('readline');
    const regex = /[a-z]/g;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    lecDetail();
    readLine();

    function lecDetail()
    {
        for(i=0; i < tNodes.length; i++)
        {
            let title = tNodes[i].getElementsByTagName('title');
            let lecturer = tNodes[i].getElementsByTagName('lecturer');
            var tData = title[0].textContent;

            if(tData.includes(word))
            {
                console.log("\nTitle containing word Internet is: ", title[0].textContent);
                count++;

                for(let j = 0; j<lecturer.length; j++)
                {
                    let surname = lecturer[j].getElementsByTagName('surname')[0];
                    let othernames = lecturer[j].getElementsByTagName('othernames')[0];
                    let fullname = (surname.textContent + " " + othernames.textContent)
                
                    console.log("Fullname of lecturer is: ", fullname);
                }
            }        
        }
        console.log("\nTotal number of units containing Internet is: ", count);
    }//end od lecDetail()

    function readLine()
    {
        rl.question('\nEnter element name(string only): ', (answer) => 
        {    
           userInp(answer);
            rl.close();
        });
    }//end of readline()

    function userInp(answer)
    {
        if(answer === "name" || answer === "duration")
        { 
            for(var i=0; i<course.length; i++){
                console.log(course[i].parentNode.getElementsByTagName(answer)[i].firstChild.nodeValue);
            }
        }
        else if(answer === "title" || answer === "lecturer" || answer === "surname" || answer === "othernames" || answer === "email")
        {
            if(answer.match(regex))
            {
                console.log(`\nYour element name is: ${answer}`);
                for(let j = 0; j<tNodes.length; j++)
                {
                    let nodeValue = tNodes[j].getElementsByTagName(answer)[0];
                    console.log(`Values of ${answer} is: `, nodeValue.textContent);
                }
            }
            else
            {
                console.log("\nPlease enter valid element name.");
            }
        }
        else
        {
            console.log("please enter a valid element name and try again!");
        }
    }//end of userInp()
});
