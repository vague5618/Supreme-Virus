//supreme.js from jay
var page = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22',
    pageSettings: {
        loadImages: false,         // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    }
});
var baseUrl = 'http://www.supremenewyork.com/shop';

page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};
page.onLoadStarted = function() {
    console.log('Load Started');
};
page.onUrlChanged = function(targetUrl) {
  console.log('New URL: ' + targetUrl);
};

page.onLoadFinished = function(status) {
  console.log('Status: ' + status);
  // Do other things here...
};

page.onError = function(msg, trace) {  
   console.log('CONSOLE Message: ' + msg ); 
   console.log(JSON.stringify(trace)); 
}; 


page.start(baseUrl);

page.then(function() {
    $('#shop-scroller > li:nth-child(30) > a > img').click();
});

page.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page: ' + this.getTitle());
});

page.run();


