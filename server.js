// Dependencies Connecting 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//Port 
var PORT = process.env.PORT || 3000;


//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//css
app.use(express.static(path.join(__dirname, "app/css")));

//Router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// app.get('/', function (req, res) {

// Displays all characters


app.listen(PORT, function () {
    console.log('Running on PORT ' + PORT);
});
