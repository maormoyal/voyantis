/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

import styles from './CreateQueue.module.scss';

const CreateQueue = ({ onQueueCreated }) => {
  const [queueName, setQueueName] = useState('');

  const handleCreateQueue = () => {
    if (!queueName.trim()) {
      alert('Queue name cannot be empty');
      return;
    }

    axios
      .post('http://localhost:5000/api/create', { queue_name: queueName })
      .then(() => {
        setQueueName('');
        onQueueCreated(); // Refresh the queue list
      })
      .catch((error) => {
        console.error('Error creating queue', error);
        alert('Failed to create queue');
      });
  };

  return (
    <div className={styles.createQueueContainer}>
      <input
        type='text'
        value={queueName}
        onChange={(e) => setQueueName(e.target.value)}
        placeholder='Enter queue name'
      />
      <button onClick={handleCreateQueue}>Create Queue</button>
    </div>
  );
};

export default CreateQueue;
