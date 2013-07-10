var express = require('express');

var app = express.createServer(express.logger());

var openFile = function(whatFile){
/*This function save to a file(whatFile) some text(whatText)*/
	var fsObj = require('fs');
	return fsObj.readFileSync(whatFile);
	fsObj = null;
}

app.get('/', function(request, response) {
  var buf = new Buffer(openFile('index.html'));
  response.send(buf.toString()));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
