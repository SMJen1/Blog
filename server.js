var cpuCount = require('os').cpus().length;

var compression = require('compression');

var bodyParser = require('body-parser')

var cluster = require('cluster');

var express = require('express');

var vash = require('vash');

var app = express();

app.use(compression());

app.set("view engine", "vash");

app.use(express.static(__dirname + '/public'));

//app.use(express.static(__dirname + '/public', { maxAge: 31536000000 }));

app.use(bodyParser.json())

var controller = require("./controller");

controller.init(app);

if (cluster.isMaster) {
  for (var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  app.listen(80);
}
