const { format } = require('date-fns');
const  { v4 : uuid } = require('uuid');

const fs2 = require('fs');
const fs2Promises = require('fs').promises;

const path2 = require('path');
const path = require('path');
const logEvents = require('../logEvents');

const logEventsTwo = async ( message ) => {
    const dateTime2 = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItemAll = `${dateTime2}\t${message}\n`;
    console.log(logItemAll);
    try {
        if(!fs2.existsSync(path.join(__dirname,'logs'))) {
            await fs2Promises.mkdir(path.join(__dirname,'logs'));
        }
        await fs2Promises.appendFile(path.join(__dirname,'logs','eventLog2.txt'),logItemAll);
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEventsTwo;