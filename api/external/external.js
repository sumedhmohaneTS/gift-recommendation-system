const express = require('express');
const router = express.Router();

// Define routes for external gift recommendation service

router.get('/health', (req, res) => {
    return res.send('Hello World! From external router JS');
});

module.exports = router