var express = require('express');

var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
});


var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log('App started... ' + port);
});