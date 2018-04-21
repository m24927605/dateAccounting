'use strict';

module.exports = (app) => {
    app.get('/', (req, res) => {
        let title = process.env.NODE_ENV;
        res.render('index.html', { title: title });
    });
    app.get('/index', (req, res) => {
        let title = process.env.NODE_ENV;
        res.render('index.html', { title: title });
    })
};