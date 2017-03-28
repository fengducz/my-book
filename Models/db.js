var mongoose = require('mongoose')
var UserSchema = require('../schemas/db.js')

var User = mongoose.model("User", UserSchema);

module.exports = User;