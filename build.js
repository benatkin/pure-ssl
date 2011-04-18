var fs    = require('fs'),
    sites = require('./sites').sites;

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
  lines.splice.apply(lines, [start + 1, end - start - 1, ''].concat(['text here'], ['']));
  fs.writeFile('README.md', lines.join("\n"));
});

fs.writeFile('sites.json', JSON.stringify(sites, null, 2) + "\n");
