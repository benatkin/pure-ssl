var fs    = require('fs'),
    sites = require('./sites').sites;

fs.writeFile('sites.json', JSON.stringify(sites, null, 2) + "\n");
