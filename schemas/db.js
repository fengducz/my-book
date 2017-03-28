var mongoose = require('mongoose')

 



var UserSchema = new mongoose.Schema({
	username : { type: String },                    //用户账号
    useremail: {type: String}, 						//邮箱
    userpsw: {type: Number},                       
    logindate : { type: Date,default:Date.now}   
})


module.exports = UserSchema;