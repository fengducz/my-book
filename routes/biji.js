var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
// mongoose.connect('mongodb://localhost/users');
var Biji = require('../Models/biji.js')

router.post('/', function(req, res, next) {
	var bj = req.body;
	bj.username = req.session.user.username;
	var biji = new Biji(bj)
		biji.save(function (err, user) {
 		if (err){return console.log(err);} 
 		 

 		 res.redirect('/');
		
	});
		});
  
router.get('/', function(req, res, next) {
		console.log(req.session.user)
		Biji.find({},function (err, bijis) {
 		if (err){return console.log(err);} 
 		 
 		res.json(bijis);
 		 // res.redirect('/');
		
	});
		});



module.exports = router;