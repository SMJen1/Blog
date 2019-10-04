var cpuCount = require('os').cpus().length;

var compression = require('compression');

var bodyParser = require('body-parser')

var cluster = require('cluster');

var express = require('express');

var vash = require('vash');

var app = express();    

app.use(compression());

app.set("view engine", "vash");

app.use(express.static(__dirname + '/public', {
  maxAge: 86400000,
  setHeaders: function (res, path) {
    res.setHeader("Expires", new Date(Date.now() + 2592000000 * 30).toUTCString());
  }
}));

//app.use(express.static(__dirname + '/public', { maxAge: 31536000000 }));

app.use(bodyParser.json())

var controller = require("./controller");

controller.init(app);


//app.listen(3000);

app.listen(process.env.PORT);
