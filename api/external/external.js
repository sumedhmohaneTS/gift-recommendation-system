const express = require('express');
const router = express.Router();

// Define routes for external gift recommendation service

router.get('/health', (req, res) => {
    return res.send('Hello World! From external router JS');
});

router.get('/products', (req, res, next) => {
    req.container.resolve('externalApiHandler').getProducts(req, res, next).catch(next)
})

router.get('/products/featured', (req, res, next) => {
    req.container.resolve('externalApiHandler').getFeaturedProducts(req, res, next).catch(next)
})

module.exports = router