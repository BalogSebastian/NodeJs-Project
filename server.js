const logEvents = require('./logEvents');
const EventEmiteer = require('events');
const { set } = require('date-fns');

class MyEmitter extends EventEmiteer{};

//initialize object
const myEmitter = new MyEmitter();

// add a listener for the log event 
myEmitter.on('log', (msg) => logEvents(msg)); // on = listening

setTimeout(() => {
    //event emmit
    // .emit is emitting the event
    myEmitter.emit('log', 'Log event has been created')
}, 2000);
