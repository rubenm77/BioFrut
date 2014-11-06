var express=require('express');
var path=require('path');
var cors= require('cors');
var bodyParser= require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var passport = require('passport');
var flash    = require('connect-flash');

var app = express();

function perimitirCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header('Content-Type', 'application/json');
      next();

}
 
require('../authentification/passport')(passport);


app.use(express.static(path.join(__dirname, '/public/')));


app.use(perimitirCrossDomain);
app.use(cors());
// app.use(perimitirCrossDomain);

// estos 2 metodos sirven para parsear los datos json
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({ secret: 'vidyapathaisalwaysrunning', 
            resave: true,
            saveUninitialized: true } )); // session secret
app.use(cookieParser());
app.use(bodyParser.json());

app.use(methodOverride());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

require('../authentification/routes-pass')(app, passport);


app.listen(3000);
console.log("Express server listening on port 3000");

/*****************funciones***********************/

