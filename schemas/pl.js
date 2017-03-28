var mongoose = require('mongoose')

 



var PinglunSchema = new mongoose.Schema({
	book:{type:String},
	username : { type: String },                    //用户账号
    biaoti: {type: String}, 						//邮箱
    pinglun: {type: String},                       
    date : { type: Date,default:Date.now}   
})


module.exports = PinglunSchema;