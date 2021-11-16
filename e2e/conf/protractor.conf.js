const defaultConf = require('./base.conf.js');
const devEnvConf = require('./environment/devenv.conf.js');
const testEnvConf = require('./environment/testenv.conf.js');

let env = process.env.ENV;
let protractorEnvConf = {};

if (env === 'dev') {
    protractorEnvConf = Object.assign(defaultConf.config, devEnvConf.config);
    console.log("In dev block");
}

if (env === 'test') {
    protractorEnvConf = Object.assign(defaultConf.config, testEnvConf.config);
    console.log("In test block");
} else {
    protractorEnvConf = Object.assign(defaultConf.config, testEnvConf.config);
}

exports.config = protractorEnvConf;
