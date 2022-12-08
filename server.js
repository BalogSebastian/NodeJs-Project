const http = require('http');
const path = require('path');
const fs= require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./logEvents');
const EventEmiteer = require('events');
const { set } = require('date-fns');
const { response } = require('express');

class Emitter extends EventEmiteer{};
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName ) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;


//serve file
const serveFile = async(filePath, contentType, response ) => {
    try {
        const rawData = await fsPromises.readFile(filePath,
             !contentType.includes('image') ? 'utf8' : ''
             );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, 
            {'Content-Type': contentType}
            );
        response.end(
            contentType === 'application/json' 
                ? JSON.stringify(data)
                : data
        );
    } catch (err) {
        console.log(err);
        myEmitter.emit('log',`${err.name}: ${err.message}`,'errLog.txt' );
        response.statusCode = 500;
        res.end();
    }
}
// creating minimal server

const server = http.createServer((req,res) => {
    
    console.log(req.url, req.method);
    myEmitter.emit('log',`${req.url}\t${req.method}\n`,'reqLog.txt' );
    
    const extension = path.extname(req.url);

    let contentType;

    switch ( extension ) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    //chain turnery statement

    let filePath =
        contentType === 'text/html' && req.url ==='/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url);

    // if there is no extension which means 
    //it was probabbly a slash and didn't
    // have a file extension and
    //  the very last charachter of the url is not equal to a slash. 
    //So maybe if we request a new-page or something but we didn't type the .html afterwards
    // this will make it work anyway.
    // =====
    // makes .html extension not required in the browser 
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    //we are ready to check and see if we want to serve the file
    const fileExists = fs.existsSync(filePath);

    if ( fileExists ) {
        serveFile(filePath,contentType,res);
        //serve the file 
    } else {
        //if it doesnt't exist
        //404 
        // 301 redirect
        //console.log(path.parse(filePath));
        switch(path.parse(filePath).base) {
            case 'old-page.html':
                response.writeHead(301,
                     {'Location': '/new-page.html'});
                res.end();
                break;
            case 'www-page.html':
                response.writeHead(301, {'Location': '/'});
                res.end();
                break;
            default://serve a 404 response
                serveFile(path.join(__dirname, 'views','404.html'),'text/html',res);
        }
    }


    // on localhost/3500 => / GET

    //build a path and serve the file
    // let path;
                // firts method
    // if ( req.url === '/' || req.url === 'index.html') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     path = path.join(__dirname, 'views', 'index.html');
    //     fs.readFile(path, 'utf8', (err, data) => {
    //         res.end(data);
    //     });
    // }

            // second method, this is not dynamic 
    // switch (req.url) {
    //     case '/':
    //         res.statusCode = 200;
    //         path = path.join(__dirname, 'views', 'index.html');
    //         fs.readFile(path, 'utf8', (err, data) => {
    //             res.end(data);
    //         });
    //         break;
    //     }
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
// //initialize object
// const myEmitter = new Emitter();

// // add a listener for the log event 
// myEmitter.on('log', (msg) => logEvents(msg)); // on = listening

// setTimeout(() => {
//     //event emmit
//     // .emit is emitting the event
//     myEmitter.emit('log', 'Log event has been created')
// });
