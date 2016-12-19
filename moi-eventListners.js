// Event Listeners
var events = require('events');
var eventEmitter = new events.EventEmitter();

// add listener 1
var listner1 = function listner1() {
	console.log('L1....');
}

// add listener 2
var listner2 = function listner2() {
	console.log('L2....');
}

// Bind events
eventEmitter.addListener('connection', listner1);
eventEmitter.addListener('connection', listner2);

// Fire event
console.log('Firing connection...');
eventEmitter.emit('connection');

// removing listner1
eventEmitter.removeListener('connection', listner1);

// Fire event
console.log('Firing connection without L1...');
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + ' Listners(s) listening to connection event!');

console.log('fileName:' + __filename);
console.log('dirName:' + __dirname);
console.log('Program done!');

