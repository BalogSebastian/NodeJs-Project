const logEventsTwo = require('./logEvents2');

const EventEMitterTwo = require('events');
const { set } = require('date-fns');

class MyEmitter2 extends EventEMitterTwo {};

// initialize object

const myEmitterTwo = new MyEmitter2();

// add a listener for the log event 

myEmitterTwo.on('log', (msg) => logEventsTwo(msg)); // on = listening 

setTimeout(() => {
    //event emmit 

    // .emit is emmiting the event

    myEmitterTwo.emit('log','Log event emmited for the second time');
})

// this all is just an example 