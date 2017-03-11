var Joy = require('../models/joy');

module.exports.create = function (req, res){
	// console.log(req.body);
	var joy    = new Joy(req.body);
	joy.save(function (err, result){
		res.json(result);
	});
}

module.exports.list = function (req, res){
	Joy.find({}, function (err, results){
		res.json(results); 
	})
}

