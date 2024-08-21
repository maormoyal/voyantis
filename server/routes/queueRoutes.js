// queueRoutes.js
const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

// Specific routes first
router.get('/stats', queueController.getQueueStats);
router.post('/create', queueController.createQueue);

// General routes after specific ones
router.post('/:queue_name', queueController.postMessage);
router.get('/:queue_name', queueController.getMessage);

module.exports = router;
