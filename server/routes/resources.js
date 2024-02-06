const express = require('express');
const Resource = require('../models/resourceModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'GET all resources' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'GET resource by id' });
});

router.post('/', async(req, res) => {
    const {name, url, category, description, image} = req.body;
    try {
        const resource = await Resource.create({name, url, category, description, image});
        res.status(200).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a resource' });
});

router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a resource' });
});


module.exports = router;