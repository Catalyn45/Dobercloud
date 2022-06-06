const fs = require('fs');
const logger = require('./config').logger;

function get_http_scripts() {
    logger.debug('reding http scripts from file');
    return JSON.parse(fs.readFileSync('./http_scripts.json', 'utf8'));
}

function get_tcp_patterns() {
    logger.debug('reding tcp patterns from file');
    let patterns = JSON.parse(fs.readFileSync('./profiling_patterns.json', 'utf8'));
    return patterns.tcp;
}

function get_udp_patterns() {
    logger.debug('reding udp patterns from file');
    let patterns = JSON.parse(fs.readFileSync('./profiling_patterns.json', 'utf8'));
    return patterns.udp;
}

module.exports = {
    get_http_scripts,
    get_tcp_patterns,
    get_udp_patterns
}