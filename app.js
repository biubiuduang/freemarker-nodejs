var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var freemarker = require('./engines/fm.js');
var fs = require("fs");

// 自动添加路由
var files = fs.readdirSync('./routes');
files.forEach((file, index)=>{
  var route = require('./routes/' + file.replace('.js', ''));
  if(file === 'index.js'){
    app.use('/', route);
  }else{
    app.use('/' + file.replace('.js', ''), route);
  }
});

// var index = require('./routes/index');
// var list = require('./routes/list');
// var fn = require('./routes/fn');
// var number = require('./routes/number');

// var frees = require('./routes/frees');

// app.use('/', index);
// app.use('/list', list);
// app.use('/fn',fn);
// app.use('/number',number);

//register new engine
app.engine('ftl', freemarker.engine);

// view engine setup
app.set('views', freemarker.viewRoot);
app.set('view engine','ftl');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



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
