var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const FileStore = require('session-file-store')(session);
var app = new express();
var hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.set('view options', { layout: 'layouts/main' });
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(require('connect-flash')());

app.use(require('morgan')('dev'));
var passport = require('./autorize/passport.js')(app);
var index = require('./routes/index');
var articles = require('./routes/articles');
var articlesAdmin = require('./routes/admin/articles');
var comments = require('./routes/comments');
const cors = require('cors');
const corsOptions = {
    credentials: true, // This is important.
    origin: (origin, callback) => {
            return callback(null, true)
    }
}
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.options('*',(req, res)=>
{

});
app.use('/', index);
app.use('/articles', articles);
app.use('/comments', comments);
app.use('/login', require('./routes/login')(app));
app.use('/admin/articles', articlesAdmin);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 //console.log(req);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
