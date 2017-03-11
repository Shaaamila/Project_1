var express			= require("express");
var path 			= require('path');
var app 			= express();
var bodyParser		= require('body-parser');
var mongoose        = require('mongoose');
var joysController  = require('./server/controllers/joys-controller.js');

// var routeSetter = require('./server/config/routes.js');
// routeSetter(app);
app.use(bodyParser.json()); //use json 
mongoose.connect('mongodb://localhost:27017/mean-demo');  //port is written in mongod terminal window





app.get('/',function (req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get ('/api/joys', joysController.list);
app.post('/api/joys', joysController.create);




app.listen(8000, function() {
	console.log('The server is listening on port 8000');
});