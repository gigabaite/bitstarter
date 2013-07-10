var express = require('express');

var app = express.createServer(express.logger());

var openFile = function(whatFile){
/*This function save to a file(whatFile) some text(whatText)*/
	var fsObj = require('fs');
	return fsObj.readFileSync(whatFile,'utf8');
	fsObj = null;
}

app.get('/', function(request, response) {
  var str = openFile('index.html');
  var buf = new Buffer(str, encoding='utf8')
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
