// Import events module
var events = require('events');

// Event emitter obj
var eventEmitter = new events.EventEmitter();

// handler
var connectHandler = function connected() {
	console.log('connection SUCCESS');
	// fire data received event
	eventEmitter.emit('data_received');
}

// Bind connection event with handler
eventEmitter.on('connection', connectHandler);

// Bind data_received with anonymous function
eventEmitter.on('data_received', function() {
	console.log('data recieved!!!');
});

// fire the event
eventEmitter.emit('connection');

console.log('Da end!');


