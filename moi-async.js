var fs = require("fs");

fs.readFile('asrar.txt', function(err, data) {
	if(err) {
		console.error(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log('Done main.js!');
