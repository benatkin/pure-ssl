var fs    = require('fs'),
    sites = require('./sites').sites;

fs.readFile('README.md', 'utf8', function(err, data) {
  var lines = data.split("\n");
  fs.writeFile('README.md', lines.join("\n"));
});

fs.writeFile('sites.json', JSON.stringify(sites, null, 2) + "\n");
