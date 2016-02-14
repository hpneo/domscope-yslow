var express = require('express'),
    exec = require('child_process').exec,
    port = process.env.PORT || 3000;

var app = express();

app.get('/', function(request, response) {
  var url = request.query.url;

  exec('phantomjs ./yslow.js ' + url, function(error, stdout, stderr) {
    if (error === null) {
      response.json(JSON.parse(stdout));
    }
  });
});

app.listen(port, function() {
  console.log('YSlow reporter running in 0.0.0.0:' + port);
});