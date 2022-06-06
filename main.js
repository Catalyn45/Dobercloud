const express = require('express');
const config = require('./config');
const repository = require('./repository');

const logger = config.logger;

const app = express();

app.use(config.log_requests)

app.get('/', (req, res) => {
    res.send('<h1>this is the cloud service used for the Dobermann project</h1>');
})

app.get('/scripts', (req, res) => {
    let params = req.query;

    logger.info(`request for scripts type: ${params.type}`);
    if (params.type === 'http') {
        return res.json(repository.get_http_scripts());
    }

    res.status(404)
    res.json({error: 'script type not found'})
})

app.get('/profiling_patterns', (req, res) => {
    let params = req.query;
    if (params.type === 'tcp') {
        return res.json(repository.get_tcp_patterns());
    }

    if (params.type === 'udp') {
        return res.json(repository.get_udp_patterns());
    }

    res.status(404)
    res.json({error: 'pattern type not found'})
})

app.listen(config.PORT, "127.0.0.1", () => {
    logger.info(`Example app listening on port ${config.PORT}!`);
})