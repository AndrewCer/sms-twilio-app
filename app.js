var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
require('dotenv').load();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var background = require('./lib/background');
var worker = require('./bin/javascripts/worker');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/testing', function (req, res) {
  worker();
});


// exports.workerApp = function () {
//   app.get('/texty-text',
//   exports.workerApp = function (req, res) {
//     // add this to heroku scheduler!!!!!
//     // $ node bin/javascripts/worker
//     client.messages.create({
//       to: '+' + process.env.PHONE_NUMBER,
//       from: '+' + process.env.TWILIO_NUMBER,
//       body: "Hey, is this thing on?",
//     }, function(err, message) {
//       if (err) {
//         console.log(err);
//       }
//       else {
//       console.log(message);
//       }
//     });
//     }
//   });
// }


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
