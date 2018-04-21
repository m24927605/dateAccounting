'use strict';

module.exports = (app) => {
    app.get('/', (req, res) => {
        let title = process.env.NODE_ENV;
        let channelID = process.env.CHANNEL_ID;
        let channelSecret = process.env.CHANNEL_SECRET;
        let channelToken = process.env.CHANNEL_ACCESS_TOKEN;
        res.render('index.html', { title: title,channelID:channelID,channelSecret:channelSecret,channelToken:channelToken });
    });
    app.get('/index', (req, res) => {
        let title = process.env.NODE_ENV;
        res.render('index.html', { title: title });
    })
};