var express = require("express");
var path = require('path');
var app = express();

// app.use(express.static(path.join(__dirname, './client/static')));

// var routeSetter = require('./server/config/routes.js');
// routeSetter(app);

app.get('/',function (req, res){
	res.sendfile(__dirname + '/client/views/index.html');
});


app.listen(8000, function() {
	console.log('The server is listening on port 8000');
});