const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

setInterval(function() {
    var http = require("http");
    http.get({ hostname: 'localhost', port: port, path: '/' });
}, 5000); // every 5 seconds

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
