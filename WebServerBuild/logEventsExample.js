const fs = require('fs');
const { v4: uuid } = require('uuid');
const fsPromises = require('fs').promises;
const path = require('path');
const { format } = require('date-fns');

const logEvents = async ( message, logName ) => {
    const dateTime =
        `${format(new Date(), 'yyyy/MM/dd\tHH: mm: ss')}`;
    const logItem = 
        `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if ( !fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
         //testing
        await fsPromises.appendFile(path.join(__dirname, 'logs',logName), logItem);
    } catch (err2) {
        const errorItem = err2;
        if (!fs.existsSync(path.join(__dirname,'errorLogs'))) {
            await fsPromises.mkdir(path.join(__dirname,
            'errorLogs'));
        }
        //testing
        console.log(errorItem);
        await fsPromises.appendFile(path.join(__dirname,'errorLogs', 'errLogs.txt'),errorItem);
    }
}

module.exports = logEvents;