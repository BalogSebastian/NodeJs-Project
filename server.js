const path = require('path');
const PORT = process.env.PORT || 3500;
const express = require('express');
const app = express();

app.get('^/$|/index.html', ( req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //res.send('Hello World');
});  

app.get('/new-page.html', ( req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
