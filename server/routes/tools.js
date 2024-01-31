const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'GET all tools' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'GET tool by id' });
});

router.post('/', (req, res) => {
    res.json({ message: 'POST new tool' });
});

router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a tool' });
});

router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a tool' });
});


module.exports = router;