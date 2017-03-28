var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
// mongoose.connect('mongodb://localhost/users');
var User = require('../Models/db.js')

router.post('/', function(req, res, next) {
	var auser = req.body
	console.log(auser);
	User.findOne({username: auser.username},function (err, user) {
		if (err){
			return console.log(err);} 

		if(user){
			return res.send('-1');
		}
		
		var user = new User(auser)
		user.save(function (err, user) {
 		if (err){return console.log(err);} 
 		 console.log(user);

 		 res.redirect('/');
});
		
	});
		});


module.exports = router;