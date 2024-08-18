// routes/queueRoutes.js
const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

router.post('/:queue_name', queueController.postMessage);
router.get('/:queue_name', queueController.getMessage);
router.get('/stats', queueController.getQueueStats);

module.exports = router;
