let express = require('express');
let app = express();

console.log("Hello World!");

app.use('/public', express.static(__dirname + '/public'))

app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
}
);

app.get('/json', function(req, res) {
    let hello = "Hello json"
    let message;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = hello.toUpperCase()
    }
    else {
        message = hello
    }
    const data = {
        "message": message
    }
    res.json(data)
})

app.get('/', function(req, res) {
    let absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})























 module.exports = app;
