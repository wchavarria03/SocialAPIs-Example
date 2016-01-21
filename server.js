const express = require('express');
const path = require('path');
const app = express();


const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);