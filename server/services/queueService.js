// services/queueService.js

const queues = {};

function addMessageToQueue(queueName, message) {
  if (!queues[queueName]) {
    queues[queueName] = [];
  }
  queues[queueName].push(message);
}

function getMessageFromQueue(queueName, timeout = 10000) {
  return new Promise((resolve) => {
    const checkQueue = () => {
      if (queues[queueName] && queues[queueName].length > 0) {
        resolve(queues[queueName].shift());
      } else if (timeout <= 0) {
        resolve(null);
      } else {
        setTimeout(() => {
          timeout -= 100;
          checkQueue();
        }, 100);
      }
    };

    checkQueue();
  });
}

function getQueueStats() {
  return Object.keys(queues).map((queueName) => ({
    queueName,
    messageCount: queues[queueName].length,
  }));
}

module.exports = {
  addMessageToQueue,
  getMessageFromQueue,
  getQueueStats,
};
