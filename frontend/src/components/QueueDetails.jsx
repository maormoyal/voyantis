/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';
import AddMessage from './AddMessage';
import axios from 'axios';
import styles from './QueueDetails.module.scss';

const QueueDetails = ({ queueName, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState('');

  // Function to fetch messages
  const fetchMessages = useCallback(() => {
    axios
      .get(`http://localhost:5000/api/${queueName}?timeout=10000`)
      .then((response) => {
        if (response.data) {
          setMessages((prevMessages) => [...prevMessages, response.data]);
        } else {
          setFeedback('No new messages in the queue.');
        }
      })
      .catch((error) => {
        console.error('Error fetching messages', error);
        setFeedback('Failed to fetch messages.');
      });
  }, [queueName]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages, queueName]);

  const handleMessageAdded = () => {
    // Optional: fetch updated queue stats or other actions
    // You could re-fetch messages after a message is added
  };

  return (
    <div className={styles.queueDetails}>
      <h2>{queueName}</h2>
      <AddMessage queueName={queueName} onMessageAdded={handleMessageAdded} />
      <button onClick={fetchMessages} className={styles.fetchButton}>
        Fetch Next Message
      </button>
      {messages.length > 0 && (
        <ul className={styles.messageList}>
          {messages.map((message, index) => (
            <li key={index}>{JSON.stringify(message)}</li>
          ))}
        </ul>
      )}
      {feedback && <p className={styles.feedback}>{feedback}</p>}
      <button onClick={onBack} className={styles.backButton}>
        Go Back
      </button>
    </div>
  );
};

export default QueueDetails;
