var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});
var x = require('casper').selectXPath;

casper.start("http://ci.trendmicro.com/fullcontrol/index.php?mod=projects", function() {

  this.fill('form', {
        'username':    casper.cli.get('user'),
        'password':    casper.cli.get('pass')
    }, true);
});

casper.then(function() {
  this.clickLabel(casper.cli.get('project'), 'a');
});

casper.then(function() {
  this.click(x('//*[@value="Configure Build"]'));
});

casper.then(function() {
  this.fill('form', {
        'purpose':    casper.cli.get('purpose'),
        'selectPlatformOptions_right':    ['mac10_8'],
        'selectL10nOptions_right': ['en', 'ja']
    }, true);
});

casper.then(function() {
  this.click(x('//*[@value="Execute"]'));
});

casper.run(function() {
  this.capture("screenshot.png");
  this.echo('done.').exit();
});
