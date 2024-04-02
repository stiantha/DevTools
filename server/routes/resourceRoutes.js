const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.get('/', resourceController.getAllResources);
router.get('/:id', resourceController.getResourceById);
router.post('/', resourceController.createResource);
router.delete('/:id', resourceController.deleteResource);
router.put('/:id', resourceController.updateResource);

module.exports = router;