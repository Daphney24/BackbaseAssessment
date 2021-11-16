var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var baseUrl;
var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

let devenvConf = require('./environment/devenv.conf');
let testenvConf = require('./environment/testenv.conf');

exports.config = {
    framework: 'jasmine',
    //directConnect:true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tests/createArticle.js', '../tests/updateArticle.js', '../tests/addCommentOnArticle.js', '../tests/clickArticleAsFavourite.js', '../tests/deleteArticle.js'],

    // capabilities: {
    //     'browserName': 'chrome',
    //     'goog:chromeOptions': {
    //         w3c: false
    //     }
     multiCapabilities: [
         {
        'browserName': 'chrome',
        'goog:chromeOptions': {
            w3c: false
        }}],
    //     {
    //     'browserName': 'firefox'
    // }],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
    },

    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        browser.driver.get(browser.params.baseUrl);

        jasmine.getEnv().addReporter(reporter);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: './reports/allure-results'
        }));

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports',
            filePrefix: 'xmlresults'
        }));

        var fs = require('fs-extra');

        fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });

    },


    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    }
};
