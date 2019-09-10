var express = require('express');
var app = express();
var mongoose = require('mongoose');
var conn = require('./config');
var setupController = require('./controllers/setupController')
var apiController = require('./controllers/apiController');


var port = process.env.PORT || 3000; 

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect(conn.getDbConnectionString(), {useNewUrlParser: true});
setupController(app);
apiController(app);

app.listen(port);