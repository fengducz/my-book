var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
// mongoose.connect('mongodb://localhost/users');
var User = require('../Models/db.js')

router.post('/', function(req, res, next) {
	var auser = req.body

	var user = new User(req.body)
	User.findOne({username: auser.username},function (err, user) {
		if (err){
			return console.log(err);} 

		if(!user){
			return res.send('-1');
		}
		
		if(auser.userpsw != user.userpsw){     //查询到匹配用户名的信息，但相应的password属性不匹配  
               
              return  res.send('-3');  
            }
                                                //信息匹配成功，则将此对象（匹配到的user) 赋给session.user  并返回成功  
  		req.session.user = auser;
        res.redirect('/');  
        
              
         
			

 		 
});
		
	});
  




module.exports = router;