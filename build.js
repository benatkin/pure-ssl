var fs    = require('fs'),
    sites = require('./sites').sites;

var siteLines = function() {
  var lines = [];
  for (var key in sites) {
    if (sites.hasOwnProperty(key)) {
      lines.push('* [' + sites[key].name + '](' + sites[key].url + ')');
    }
  }
  return lines;
}

fs.readFile('README.md', 'utf8', function(err, data) {
  var lines = data.split("\n"),
      start = 0,
      end = 0;
  for (var i=0; i < lines.length; i++) {
    if (start == 0 && lines[i].trim() == '# Current Sites') {
      start = i;
    } else if (start != 0 && /# \w/.test(lines[i])) {
      end = i;
      break;
    }
  }
  lines.splice.apply(lines, [start + 1, end - start - 1, ''].concat(siteLines(), ['']));
  fs.writeFile('README.md', lines.join("\n"));
});

fs.writeFile('sites.json', JSON.stringify(sites, null, 2) + "\n");
