var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('lib'));

app.set('view engine', 'ejs');

require('./routes/routes.js')(app);

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
