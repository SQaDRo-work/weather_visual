var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
  res.sendfile('views/index.html');
});

app.listen(3000);