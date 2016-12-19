var http = require('http');

var options = {
 host: 'localhost',
 port: '8081',
 path: '/index.htm'
};
// callback
var callback = function(response) {
  // cont update stream
  var body = '';
  
  response.on('data', function(data) {
    body += data;
  });
  
  response.on('end', function() {
    console.log(body);
  });
  
}


// Make a request to the server
var req = http.request(options, callback);
req.end();