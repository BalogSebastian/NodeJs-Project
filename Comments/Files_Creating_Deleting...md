NodeJs differs from Vanilla Js {
    Node runs on a server - not in a browser ( backend not frontend )
    THe console is the terminal window
    Global object instead of window object console.log(global)
    Has common Core Modules that we will explore
    CommonJs modules instead of ES6 modules 
    Missing some Js APIs like fetch
}

On ReadFiles etc { 
    fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if ( err) throw err;
    console.log(data.toString())
}) 
 ====== 

 fs.readFile('./files/starter.txt', 'utf8', ( errr, dataa) => {
    if (errr) throw errr;
    console.log(dataa.toString())
})
}

*If we have larger larger files sometimes is good to not grab all of the data once 
it could be too much just like moving a large pile of sand bucket by bucket or ...


If we write this => {


    const fs = require('fs');

const rs =fs.createReadStream('./files/lorem.txt', { encoding: 'utf8'}); // readble string

//writeable string
const  ws = fs.createWriteStream('./files/new-lorem.txt');

rs.on('data',(dataChunk) => {
    ws.write(dataChunk);
})


}
=> then we will get a new folder like lorem.txt but new-lorem.txt but just with the same content.
