var fs    = require('fs'),
    sites = require('./sites').sites;

fs.readFile('README.md', function(err, data) {
  fs.writeFile('README.md', data);
});

fs.writeFile('sites.json', JSON.stringify(sites, null, 2) + "\n");
