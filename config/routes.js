const express = require('express');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);

    const itemService = require('./itens/itemService')
    itemService.register(router, '/item');
}