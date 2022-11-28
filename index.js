const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () =>{
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'szia');
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'), path.join(__dirname,'files','reply.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete'),'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err)
    }
}

fileOps();
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if ( err) throw err;
//     console.log(data.toString())
// })


// // fs.readFile('./files/starter.txt','utf8', ( err, data) => {
// //     if (err) throw err;
// //     console.log(data.toString())
// //     //console.log(data)
// // })
// // => this will write on the console the contain of the starter.txt


// // fs.readFile('./files/hello.txt', 'utf8', ( err, data) => {
// //     if (err) throw err;
// //     console.log(data.toString())
// // })//There was an uncaught error Error: ENOENT:
// // // no such file or directory, open './files/hello.txt'


// // fs.readFile('./files/starter.txt', 'utf8', ( errr, dataa) => {
// //     if (errr) throw errr;
// //     console.log(dataa.toString())
// // })


// console.log('Hello ...')

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if ( err) throw err;
//     console.log(data.toString())
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you',(err) => {
//     if ( err) throw err;
//     console.log('Operation Complete / Write Complet')
// })// this will create an txt file and then will write in it the : Nice to meet you text

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing the test',(err) => {
//     if ( err) throw err;
//     console.log('Append Complete')
// }) // this will create an txt file and then will write in it the : Testing the test

// // new example

// // fs.writeFile(path.join(__dirname, 'files', 'newTest.txt'), 'Nice to meet you Sebi', (err) => {
// //     if ( err ) throw err;
// //     console.log('Successfully created the newTest');

// //      fs.appendFile(path.join(__dirname, 'files', 'newTest'), '\n\n\n Yes i overwrite properly this', ( err ) => {
// //         if ( err ) throw err;
// //         console.log('I properly change the newTest file containt')
// //      })
// //      fs.appendFile(path.join(__dirname, 'files', 'newTest'), '\n\n\n\n Yes i overwrite properly this', ( err ) => {
// //         if ( err ) throw err;
// //         console.log('I properly change the newTest file containt')
// //      })
// //      fs.appendFile(path.join(__dirname, 'files', 'newTest'), '\n Yes i overwrite properly this for the third time', ( err ) => {
// //         if ( err ) throw err;
// //         console.log('I properly change the newTest file containt')
// //      })
// // })


//  fs.writeFile(path.join(__dirname, 'files', 'somethingNew.txt'), 'Nice to meet you', ( err ) =>{
//      if ( err ) throw err;
//      console.log('Write complete')
//      fs.appendFile(path.join(__dirname, 'files', 'somethingNew.txt'), '\n\n Yes it is', ( err ) => {
//          if (err) throw err;
//          console.log('Append complete');
//          fs.rename(path.join(__dirname, 'files', 'somethingNew.txt'), path.join(__dirname, 'files', 'oldsomethingNew'),( err) => {
//              if ( err) throw err;
//              console.log('Rename complete = This will automatically change the file name')
//          })
//      })
//  })
//exit on uncaught errors
process.on('uncaughtException', errr => {
    console.error(`There was some error ${errr}`)
    process.exit(2);
})

// // exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error ${err}`)
//     process.exit(1);
// })