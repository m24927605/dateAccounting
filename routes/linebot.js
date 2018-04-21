'use strict';

const errorMessage = require('../services/error')();


module.exports = (app, firebaseRef) => {
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
            let data=req.body;
            console.log(data);
        } catch (err) {
            res.status(500).json(errorMessage.routerSend("linebot", err));
        }
    });
};