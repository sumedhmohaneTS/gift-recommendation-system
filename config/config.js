const dev = require('./configDev');
const stage = require('./configStage');
const prod = require('./configProd');


const configByEnv = {
    PRODUCTION: prod,
    STAGING: stage,
    DEVELOPMENT: dev,
};

const activeEnv = process.env.ACTIVE_ENV || 'DEVELOPMENT';

module.exports = configByEnv[activeEnv];