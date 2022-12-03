const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./Even Emitter/logEvents');
const EventEmitter = require('events');
const { raw } = require('express');

class Emitter extends EventEmitter {};
// initialize object
const myEmitter = new Emitter();

// myEmitter.on('log', (msg) => logEvents(msg));

//     myEmitter.emit('log','Log event emmited');

// we would like to host this somewhere , in this case in port 3500

myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));


const PORT  = process.env.PORT || 3500; 

const serverFile = async ( filePath, contentType, response ) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf8' : ''
        );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, 
            {'Content-Type': contentType}
            );
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data);
    } catch (err) {
        console.log(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt')
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt')
    
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

    // chain ternary statement 
    // set the valuse of the file path
    // && then if 
    //    req.url.slice(-1) => the last charachter in the request of the url is a slash ( this accounts for our subdirectory possible  and not just the main directory )

    let filePath = 
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url);

    // !extension == there is no extension wich means it was probably a slash and didn't have a file extension and the very last charachter of the request url is not equal to a slash, so maybe we requested a file like about or new page 
    //making our adresses work even if we don't add the .html at the end. We still serve the correct file altought we might not have typed in the dot html in the url bar in the browser

    // makes the .html extension not require in the browser
    if ( !extension && req.url.slice(-1) !== '/' ) filePath += '.html';

    // we want to check and see ifwe want to serve the file 

    const fileExists = fs.existsSync(filePath);

    if( fileExists ) {
        // serve the file 
        serverFile(filePath, contentType, res);
    } else {
        switch(path.parse(filePath).base){
            case 'old-page.html':
                res.writeHead(301, {'Location':'/new-page.html'});
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, {'Location': '/'});
                res.end();
                break;
            default:
                serverFile(path.join(__dirname, 'views','404.html'),'text/html', res);
                // serve a 404 response    

        }
        
        // 404 
        // 301 is a redirect
        //console.log(path.parse(filePath)); // this will tell us the different parts of the file path 
    }


    // this will log => / GET
                    //this will two methtods to, to build what our
                    //  server will does today
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

//the server will listen in this Port, and we console log the actually port

server.listen(PORT, () => console.log(`server running on port ${PORT}`))

//myEmitter.on('log', (msg) => logEvents(msg));

//myEmitter.emit('log', 'Log event emitted');

































// // add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg)); // on is listening

// setTimeout(() => {
//     //emit event
//     //.emit is emmiting the event 
//     myEmitter.emit('log', 'Log event emitted!');
// }, 2000);