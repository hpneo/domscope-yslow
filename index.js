var express = require('express'),
    exec = require('child_process').exec,
    pick = require('lodash-node/modern/object/pick'),
    reduce = require('lodash-node/modern/collection/reduce'),
    port = process.env.PORT || 3000;

var app = express();

app.get('/', function(request, response) {
  var url = request.query.url,
      options = pick(request.query, ['info', 'ruleset', 'threshold', 'ua', 'viewport', 'headers', 'cdns']),
      optionsAsArguments = reduce(options, function(result, value, key) {
        if (key === 'ua') {
          value = '"' + value + '"';
        }

        result.push('--' + key + ' ' + value);
        return result;
      }, []).join(' '),
      command = 'phantomjs ./yslow.js --dict ' + optionsAsArguments + ' ' + url;

  console.log('Running: ', command);

  exec(command, function(error, stdout, stderr) {
    if (error === null) {
      response.json(JSON.parse(stdout));
    }
  });
});

app.listen(port, function() {
  console.log('YSlow reporter running in 0.0.0.0:' + port);
});