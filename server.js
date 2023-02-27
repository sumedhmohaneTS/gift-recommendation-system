const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./api/router')

module.exports = () => {
    console.log("starting server");
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Define routes here...
    app.get('/health', (req, res) => {
        return res.send('Hello World!');
    });

    app.use('/api', router)

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

    // const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: 'password',
    //     database: 'gift_recommendation_db'
    // });

    // connection.connect((err) => {
    //     if (err) {
    //         console.error('Error connecting to MySQL:', err);
    //         return;
    //     }
    //     console.log('Successfully connected to MySQL database');

    // });

}
    ;
