const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const dataBase = require('./database/db');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sessions = require('express-session');
var MySQLStore = require('express-mysql-session')(sessions);
const fileUpload = require('express-fileupload')
const methodOverride = require('method-override')


const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const searchRouter = require('./routes/search');
const listingRouter = require('./routes/listing');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

const app = express();

/* set handlebars as our tempating engine */
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    partialsDir: path.join(__dirname, '/views/partials')
  })
);

const sessionStore = new MySQLStore({}/* session store options */, require("./database/db"));

app.use(sessions({
    key: "csid",
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge: 30 * 24 * 60 * 60 * 1000}
}))

/* mount global middleware */
//app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload())
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    //console.log(req.session);
    if(req.session.email){
        res.locals.logged = true;
    }
    next();
})

/* mount routes */
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/search', searchRouter);
app.use('/listing', listingRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);


/* For gracefully rendering error messages. Call next(err) from a route */
app.use((err, req, res, next) => {
  res.status(500).render('error', {message: err.message});
});

const port = process.env.PORT || 3000;
//app.listen(port, () => {console.log(`Listening on port ${port}...`)});
app.listen(port)