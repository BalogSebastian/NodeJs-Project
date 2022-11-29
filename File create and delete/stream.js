const fs = require('fs');

const rs =fs.createReadStream('./files/lorem.txt', { encoding: 'utf8'}); // readble string

//writeable string
const  ws = fs.createWriteStream('./files/new-lorem.txt');



// rs.on('data',(dataChunk) => {
//     ws.write(dataChunk);
// })
//does the same thing
rs.pipe(ws);//this one

