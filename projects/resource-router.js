const express = require('express');

const Resources = require('./model.js');

const router = express.Router();

// Get Resources
router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources =>{
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to load resources'})
    });
});

// Adding new Resource
router.post('/', (req, res) =>{
    const resourceData = req.body;

    Resources.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource'})
    });
});



module.exports = router;