const os = require('os');
const path = require('path')
const math = require('./math')
const  { add } = require('./math')
const  { substract } = require('./math')
const  { multiply } = require('./math')
const { devide } = require('./math')
 

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// Darwin
// Darwin Kernel Version 22.1.0: Sun Oct  9 20:14:30 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T8103
// /Users/balogmate

// console.log(__dirname);
// console.log(__filename);

// /Users/balogmate/Desktop/NodeJs
// /Users/balogmate/Desktop/NodeJs/server.js

//console.log(path.dirname(__filename))
//console.log(path.basename(__filename)) // server.js 
//console.log(path.extname(__filename)) // the extansion name

// /Users/balogmate/Desktop/NodeJs
// server.js
// .js

//console.log(path.parse(__filename))

// {
//     root: '/',
//     dir: '/Users/balogmate/Desktop/NodeJs',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
//   }

// console.log(math.add(2,3))// 5 on the terminal 
// console.log(add(2,3))// 5 on the terminal 
// console.log(substract(2,3)) // -1 on the terminal
// console.log(multiply(2,3)) // 6 on the terminal
// console.log(devide(2,3)) // 0.66666 on the terminal 

