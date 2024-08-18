// controllers/queueController.js
const queueService = require('../services/queueService');

async function postMessage(req, res) {
  const { queue_name } = req.params;
  const message = req.body;
  queueService.addMessageToQueue(queue_name, message);
  res.status(200).send({ message: 'Message added to queue' });
}

async function getMessage(req, res) {
  const { queue_name } = req.params;
  const timeout = parseInt(req.query.timeout) || 10000;
  const message = await queueService.getMessageFromQueue(queue_name, timeout);
  if (message) {
    res.status(200).send(message);
  } else {
    res.status(204).send();
  }
}

function getQueueStats(req, res) {
  const stats = queueService.getQueueStats();
  console.log('Queue Stats:', JSON.stringify(stats, null, 2));
  res.status(200).json(stats);
}

module.exports = {
  postMessage,
  getMessage,
  getQueueStats,
};
