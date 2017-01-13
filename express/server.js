
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function(req, res) {
	res.send('Ola GET');
})

app.post('/', function(req, res) {
	res.send('Ola POST');
})

app.delete('/deleteUser', function(req, res) {
	res.send('Ola DELETE');
})

app.get('/listUser', function(req, res) {
	res.send('Ola Listing');
})

app.get('/ab*yz', function(req, res) {
	res.send('Ola ab*yz');
})


var server = app.listen(8081, function() {
	var host = server.address().address
	var port = server.address().port
	
	console.log("Eg app listening at http://%s:%s", host, port);
})

/*
var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send('Hello World');
})
var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})
*/