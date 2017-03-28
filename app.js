var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/users');

var index = require('./routes/index');
var users = require('./routes/users');
var zhuce = require('./routes/zhuce');
var denglu = require('./routes/denglu');
var pinglun = require('./routes/pinglun');
var biji = require('./routes/biji');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'book',
  resave: false,
  saveUninitialized: true,
  
}));

app.use('/', index);
app.use('/users', users);
app.use('/zhuce', zhuce);
app.use('/denglu', denglu);
app.use('/pinglun', pinglun);
app.use('/biji', biji);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
