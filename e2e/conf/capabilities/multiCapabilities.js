let browser = process.env.BROWSER;
let protractorEnvConf = {};

module.exports = {
    buildForMultiCapabilities: function () {
        let multicaps = [];

        if (browser === 'chrome') {
            multicaps.push({
                browserName: 'chrome',
                'goog:chromeOptions': {
                    w3c: false
                }
            })
        } else if (browser === 'firefox') {
            multicaps.push({
                browserName: 'firefox',
                marionette: true,
                shardTestFiles: false,
                maxInstances: 1
            })
        } else if (browser === 'safari') {
            multicaps.push({
                browserName: 'safari'
            })
         }
         else {
            multicaps.push({
                browserName: 'chrome',
                'goog:chromeOptions': {
                    w3c: false
                }
            })
         }
        return multicaps;
    }
}