const envConfig = require('../config/config');
const middlewares = require('../driver')
const fs = require('fs');
const path = require('path');
const http = require('request-promise');

const { createContainer, InjectionMode, asValue, asClass, Lifetime } = require('awilix');
const { env } = require('process');


function getScope() {
    return { lifetime: Lifetime.SINGLETON };
}
const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register(
    {
        mysql: asValue(middlewares.mysql),
        envConfig: asValue(envConfig),
        http: asValue(http)
    }
);

const getFilesInFolder = (folderName) => {
    return fs.readdirSync(path.resolve(__dirname, folderName), { withFileTypes: true });
}

const isValidDependecyFile = (file) => {
    return file.isFile() && file.name.endsWith('.js');

}

const createDependencies = (folderName) => {
    for (const file of getFilesInFolder(folderName)) {
        if (isValidDependecyFile(file)) {
            container.register(file.name.replace('.js', ''), asClass(require(path.resolve(__dirname, folderName, file.name)), getScope()))
        }
    }
}

createDependencies('../service');
createDependencies('../repo');

createDependencies('../api');
createDependencies('../api/internal');
createDependencies('../api/external');

module.exports = container