require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World!");

const MESSAGE_STYLE = process.env.MESSAGE_STYLE

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function(req, res) {
    let message = "Hello json"
    const messageNew = MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message
    const data = {
        "message": messageNew
    }
    res.json(data)
})

app.get('/', function(req, res) {
    let absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})























 module.exports = app;
