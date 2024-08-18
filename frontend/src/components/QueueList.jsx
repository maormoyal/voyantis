/* eslint-disable react/prop-types */
// src/components/QueueList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './QueueList.module.scss';

const QueueList = ({ onSelectQueue }) => {
  const [queues, setQueues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/stats')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setQueues(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError(
            'Unexpected response format: ' + JSON.stringify(response.data)
          );
        }
      })
      .catch((error) => {
        console.error('Error fetching queue stats', error);
        setError('Failed to fetch queue stats: ' + error.message);
      });
  }, []);

  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  return (
    <div className={styles.queueList}>
      {queues.length === 0 ? (
        <p>No queues available.</p>
      ) : (
        queues.map((queue) => (
          <div
            key={queue.queueName}
            className={styles.queueItem}
            onClick={() => onSelectQueue(queue.queueName)} // Ensure this is working
          >
            <h3>{queue.queueName}</h3>
            <p>{queue.messageCount} messages</p>
          </div>
        ))
      )}
    </div>
  );
};

export default QueueList;
