let express = require('express');
let bodyParser = require('body-parser');
let app = express();

console.log("Hello World!");

app.use('/public', express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/now', function(req,res, next){
    req.time = new Date().toString();
  next();
}, function(req, res){
 
  console.log('time'+req.time);
  res.json({'time': req.time});
});

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

app.get('/:word/echo', function(req, res) {
    let word = req.params.word

    let jsonObj = {"echo": word}
    res.json(jsonObj)
})

app.get('/name', function(req, res) {
    let first = req.query.first;
    let last = req.query.last;

    let jsonObj = {"name": first + " " + last}
    res.json(jsonObj)
})

app.post('/name', function(req, res) {
    let name = req.body.first + " " + req.body.last
    res.json({"name": name})
})











 module.exports = app;
