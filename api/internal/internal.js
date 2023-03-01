const express = require('express');
const router = express.Router();

// Define routes for internal gift recommendation service

router.get('/health', (req, res) => {
    return res.send('Hello World! From internal router JS');
});

router.post('/products', (req, res, next) => {
    req.container.resolve('internalApiHandler').addProducts(req, res, next).catch(next)
})

module.exports = router