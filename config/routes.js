const express = require('express');
const itemQuerys = require('../itens/itemQuery');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);

    const itemService = require('../itens/itemService')
    itemService.register(router, '/item');

    router.get('/search-name/:name', itemQuerys.searchByName);
}