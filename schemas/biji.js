var mongoose = require('mongoose')

 



var BijiSchema = new mongoose.Schema({
	book:{type:String},
	username : { type: String },                    //用户账号
    biaoti: {type: String}, 						//邮箱
    biji: {type: String},                       
    date : { type: Date,default:Date.now}   
})


module.exports = BijiSchema;