const defaultConf = require('./base.conf.js');
const devEnvConf = require('./environment/devenv.conf.js');
const testEnvConf = require('./environment/testenv.conf.js');

let env = process.env.ENV;
let protractorEnvConf = {};

if (env === 'dev') {
    protractorEnvConf = Object.assign(defaultConf.config, devEnvConf.config);
}
if (env === 'test') {
    protractorEnvConf = Object.assign(defaultConf.config, testEnvConf.config);
} else {
    protractorEnvConf = Object.assign(defaultConf.config, testEnvConf.config);
}

exports.config = protractorEnvConf;
