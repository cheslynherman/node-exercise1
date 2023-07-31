var fs = require ("fs");
fs.writeFile("data.txt", "Hello World!, Hello baby youre cool", function (err){
    if (err)
    console.log (err);
    else 
    console.log ("Write operation complete.");
});

var fs = require ("fs");
fs.writeFile("data.txt", "such a nice person", function (err){
    if (err)
    console.log (err);
    else 
    console.log ("Write operation complete.");
});

var fs = require("fs");
fs.appendFile("data.txt", "Another one", function (err) {
    if (err)
    console.log(err);
    else
    console.log("Append operation complete.");
});