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
