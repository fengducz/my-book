var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
// mongoose.connect('mongodb://localhost/users');
var Pinglun = require('../Models/pl.js')

router.post('/', function(req, res, next) {
	var pl = req.body;
	pl.username = req.session.user.username;
	var pinglun = new Pinglun(pl)
		pinglun.save(function (err, user) {
 		if (err){return console.log(err);} 
 		 

 		 res.redirect('back');    
		
	});
		});
  
router.get('/', function(req, res, next) {
		console.log(req.session.user)
		Pinglun.find({},function (err, pingluns) {
 		if (err){return console.log(err);} 
 		 
 		res.json(pingluns);
 		 // res.redirect('/');
		
	});
		});



module.exports = router;