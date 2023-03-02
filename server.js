const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./api/router')

module.exports = (container) => {
    console.log("starting server");
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        req.container = container.createScope();
        next();
    });

    // Define routes here...
    app.get('/api/health', (req, res) => {
        return res.send('Hello World!');
    });

    app.use('/api', router)

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

};
