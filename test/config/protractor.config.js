// An example configuration file.
const yargs = require('yargs').argv;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },

  onPrepare: function(){
    browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: '../Module-10/test/reports',
        cleanDestination: false,
        fileName: 'testReport'
      })
    );
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../spec/*.js'],

  baseUrl: 'localhost',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
