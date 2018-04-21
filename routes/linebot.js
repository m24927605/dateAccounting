'use strict';

const errorMessage = require('../services/error')();


module.exports = (app, linebotParser, firebaseRef) => {
    app.get('/linebot', (req, res) => {
        try {
            firebaseRef.once("value", function (snapshot) {
                console.log(snapshot.val());
                res.send(snapshot.val());
            });
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("linebot", err));
        }
    });
    app.post('/linebot', (req, res) => {
        try {
            linebotParser.on('message', function (event) {
                if (event.message.type = 'text') {
                    let msg = event.message.text;
                    firebaseRef.set('testmsg', msg);
                }
            });
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("linebot", err));
        }
    });
};