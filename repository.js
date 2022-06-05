const fs = require('fs');
const logger = require('./config').logger;

function get_http_scripts() {
    logger.debug('reding http scripts from file');
    return JSON.parse(fs.readFileSync('./http_scripts.json', 'utf8'));
}

module.exports = {
    get_http_scripts,
}