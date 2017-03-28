var mongoose = require('mongoose')
var PinglunSchema = require('../schemas/pl.js')

var Pinglun = mongoose.model("Pinglun", PinglunSchema);

module.exports = Pinglun;