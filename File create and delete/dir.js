const fs = require('fs');

if (!fs.existsSync('./new')){
    fs.mkdir('./new',(err) => {
        if (err) throw err;
        console.log('Directory created')
    })
}

if (fs.existsSync('./new')){
    fs.rmdir('./new',(err) => {
        if (err) throw err;
        console.log('Directory removed')
    })
}

// if it doesnt exist create one regardless if exists delete it
// then we will once create a directory and after delete one and vice-versa