var express			= require("express");
var path 			= require('path');
var app 			= express();
var bodyParser		= require('body-parser');
var mongoose        = require('mongoose');
var joysController  = require('./server/controllers/joys-controller');

// var routeSetter = require('./server/config/routes.js');
// routeSetter(app);
mongoose.connect('mongodb://localhost:27017') //port is written in terminal window where mongod is running

app.use(bodyParser());

app.get('/',function (req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/joys', joysController.create);

app.listen(8000, function() {
	console.log('The server is listening on port 8000');
});