const express = require('express');
const router = express.Router();

const internalRouter = require('./internal/internal')
const externalRouter = require('./external/external')
// Define routes for gift recommendation service

router.use('/internal', (req, res, next) => {
    next();
},
    internalRouter
);


router.use('/external', (req, res, next) => {
    next();
},
    externalRouter
);

router.get('/health', (req, res) => {
    return res.send('Hello World! From router JS');
});

// // Get gift recommendations for a specific user
// router.get('/users/:userId/gifts', (req, res) => {
//     const userId = req.params.userId;
//     const sql = `SELECT * FROM gifts WHERE user_id = ?`;
//     connection.query(sql, [userId], (err, results) => {
//         if (err) {
//             console.error('Error fetching gift recommendations:', err);
//             res.status(500).json({ error: 'Error fetching gift recommendations' });
//             return;
//         }
//         res.json(results);
//     });
// });

// // Create a new gift recommendation for a specific user
// router.post('/users/:userId/gifts', (req, res) => {
//     const userId = req.params.userId;
//     const { name, description } = req.body;
//     const sql = `INSERT INTO gifts (name, description, user_id) VALUES (?, ?, ?)`;
//     connection.query(sql, [name, description, userId], (err, result) => {
//         if (err) {
//             console.error('Error creating gift recommendation:', err);
//             res.status(500).json({ error: 'Error creating gift recommendation' });
//             return;
//         }
//         res.json({ id: result.insertId, name, description });
//     });
// });

// // Update an existing gift recommendation for a specific user
// router.put('/users/:userId/gifts/:giftId', (req, res) => {
//     const userId = req.params.userId;
//     const giftId = req.params.giftId;
//     const { name, description } = req.body;
//     const sql = `UPDATE gifts SET name = ?, description = ? WHERE id = ? AND user_id = ?`;
//     connection.query(sql, [name, description, giftId, userId], (err, result) => {
//         if (err) {
//             console.error('Error updating gift recommendation:', err);
//             res.status(500).json({ error: 'Error updating gift recommendation' });
//             return;
//         }
//         if (result.affectedRows === 0) {
//             res.status(404).json({ error: 'Gift recommendation not found' });
//             return;
//         }
//         res.json({ id: giftId, name, description });
//     });
// });

// // Delete a gift recommendation for a specific user
// router.delete('/users/:userId/gifts/:giftId', (req, res) => {
//     const userId = req.params.userId;
//     const giftId = req.params.giftId;
//     const sql = `DELETE FROM gifts WHERE id = ? AND user_id = ?`;
//     connection.query(sql, [giftId, userId], (err, result) => {
//         if (err) {
//             console.error('Error deleting gift recommendation:', err);
//             res.status(500).json({ error: 'Error deleting gift recommendation' });
//             return;
//         }
//         if (result.affectedRows === 0) {
//             res.status(404).json({ error: 'Gift recommendation not found' });
//             return;
//         }
//         res.json({ message: 'Gift recommendation deleted' });
//     });
// });

module.exports = router;
