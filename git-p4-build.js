var casper = require('casper').create({
    verbose: true,
    logLevel: "info",
    viewportSize: {width: 1024, height: 768}
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
  this.waitForSelector("#syncFrom", function() {
    this.fill('form', {
      'purpose':    casper.cli.get('purpose'),
      'chkForceBuild': true,
      'selectPlatformOptions_left':    [casper.cli.get('platform')]
    });
    this.click("#button3");

    var langs = casper.cli.get('langs').split(",");
    langs.forEach(function(lang) {
      casper.fill('form', {
        'selectL10nOptions_left': [lang]
      });
      casper.click("#button");
    });

    this.click("a#linkNext");
  });
});

casper.then(function() {
  this.waitForSelector(x('//*[@value="Execute"]'), function() {
    this.click(x('//*[@value="Execute"]'));
  }, function() {
    this.capture("error.png");
  });
});

casper.run(function() {
  this.capture("screenshot.png");
  this.echo('done.').exit();
});
