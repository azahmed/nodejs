var fs = require("fs");
//var data = fs.readFileSync('asrar.txt');

fs.readFile('asrar.txt', function(err, data) {
	if(err) {
		return console.error(err);
	}
	console.log(data.toString());
});

//console.log(data.toString());
console.log('Done main.js!');
