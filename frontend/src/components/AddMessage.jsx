/* eslint-disable react/prop-types */
// src/components/AddMessage.jsx
import { useState } from 'react';
import axios from 'axios';
import styles from './AddMessage.module.scss';

const AddMessage = ({ queueName, onMessageAdded }) => {
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAddMessage = () => {
    if (!message.trim()) {
      setFeedback('Message cannot be empty.');
      return;
    }

    axios
      .post(`http://localhost:5000/api/${queueName}`, { content: message })
      .then(() => {
        setFeedback('Message added successfully.');
        setMessage(''); // Clear the input field
        onMessageAdded(); // Callback to refresh the queue list or take other actions
      })
      .catch((error) => {
        console.error('Error adding message', error);
        setFeedback('Failed to add message.');
      });
  };

  return (
    <div className={styles.addMessageContainer}>
      <h2>Add a Message to {queueName}</h2>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Enter your message'
        className={styles.messageInput}
      />
      <button onClick={handleAddMessage} className={styles.addButton}>
        Add Message
      </button>
      {feedback && <p className={styles.feedback}>{feedback}</p>}
    </div>
  );
};

export default AddMessage;
