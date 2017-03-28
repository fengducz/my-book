var mongoose = require('mongoose')
var BijiSchema = require('../schemas/biji.js')

var Biji = mongoose.model("Biji", BijiSchema);

module.exports = Biji;