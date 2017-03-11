var Joy = require('../models/joy');

module.exports.create = function (req, res){
	var joy = new Joy(req.body);
	joy.save(); 
}
