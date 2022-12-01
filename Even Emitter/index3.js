// const logEvents = require('./logEvents');
// const logEventsTwo = require('./logEvents2');

// const EventEmitter2 = require('events');
// const EventEmitter = require('events');

// const { set2 } = require('date-fns');
// const { set } = require('date-fns');

// class MyEmitter extends EventEmitter {};
// class MyEmitter2 extends EventEmitter2 {};

// // initialize object

// const myEmitter = new MyEmitter();

// const myEmitter2 = new MyEmitter2();

// // add listener for the log event

// myEmitter.on('log', (msg) => logEvents(msg)); // on is listening
// myEmitter2.on('log', (msg) => logEventsTwo(msg));

// setTimeout(() => {
//     //emit event
//     //.emit is emmiting the event 
//     myEmitter.emit('log', 'Log event emitted!');
//     myEmitter2.emit('log', 'Log event emmited for the second time!')
// }, 2000);