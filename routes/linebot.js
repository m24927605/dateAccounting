'use strict';

const errorMessage = require('../services/error')();


module.exports = (app, linebotParser, firebaseRef) => {
    app.get('/linebot', (req, res) => {
        try {
            ref.once("value", function (snapshot) {
                console.log(snapshot.val());
            });
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("Manager", err));
        }
    });
    app.post('/linebot', (req, res) => {
        try {
            console.log(req.body);
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("Manager", err));
        }
    });
};