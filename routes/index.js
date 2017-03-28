var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
// mongoose.connect('mongodb://localhost/users');
var Book = require('../Models/book.js')
var Pinglun = require('../Models/pl.js')
var Biji = require('../Models/biji.js')


/* GET home page. */
router.get('/', function(req, res, next) {
	var ss = req.session.user;
  res.render('index',{ss});
});

router.get('/lujing', function(req, res, next) {
  res.render('路径分类');
});


router.get('/xiangqing', function(req, res, next) {
	var ss = req.session.user;
  res.render('评论',{ss});
});

router.get('/out', function(req, res, next) {
	req.session.user = null;
  res.redirect('/');
});

router.get('/book/:id',function(req, res, next) {
    // var ss = req.session.user;
    var id = req.params.id;

    Book.findById(id,function (err, book) {
   if (err){return console.log(err);} 
    res.json(book);
     // res.redirect('/');
    
  });
    });


router.post('/pinglun/:id', function(req, res, next) {
  var pl = req.body;
  pl.username = req.session.user.username;
  pl.book = req.params.id;
  var pinglun = new Pinglun(pl)
    pinglun.save(function (err, user) {
    if (err){return console.log(err);} 
     

     res.redirect('back');    
    
  });
    });
  
router.get('/pinglun/:id', function(req, res, next) {
    console.log(req.session.user)
    Pinglun.find({book:req.params.id},function (err, pingluns) {
    if (err){return console.log(err);} 
     
    res.json(pingluns);
     // res.redirect('/');
    
  });
    });

router.post('/biji/:id', function(req, res, next) {
  var bj = req.body;
  bj.username = req.session.user.username;
  bj.book = req.params.id;
  var biji = new Biji(bj)
    biji.save(function (err, user) {
    if (err){return console.log(err);} 
     

     res.redirect('/');
    
  });
    });
  
router.get('/biji/:id', function(req, res, next) {
    console.log(req.session.user)
    Biji.find({book:req.params.id},function (err, bijis) {
    if (err){return console.log(err);} 
     
    res.json(bijis);
     // res.redirect('/');
    
  });
    });

module.exports = router;
