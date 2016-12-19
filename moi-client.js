// client.js
var net = require('net');

var client = net.connect({port: 8081}, function() {
	console.log('connected to server on 8081');
	
});

client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});

client.on('end', function() {
	console.log('Client disconnected!');
});

