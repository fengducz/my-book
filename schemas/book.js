var mongoose = require('mongoose')

 



var BookSchema = new mongoose.Schema({
	name : { type: String },                    //用户账号
    img: {type: String}, 						//邮箱
    jieshao: {type: String},                       
    p: {type: String},   
})


module.exports = BookSchema;