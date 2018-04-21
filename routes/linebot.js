'use strict';

const errorMessage=require('../services/error')();

module.exports = (app) => {
    app.get('/linebot', (req, res) => {
        try {
            res.json({linebot:'test'});
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("Manager", err));
        }
    });
    app.post('/linebot', (req, res) => {
        try {
            res.json({linebot:'test'});
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("Manager", err));
        }
    });
};