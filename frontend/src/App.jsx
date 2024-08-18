// src/App.jsx
import { useState } from 'react';
import QueueList from './components/QueueList';
import QueueDetails from './components/QueueDetails';
import styles from './App.module.scss';

function App() {
  const [selectedQueue, setSelectedQueue] = useState(null);

  return (
    <div className={styles.appContainer}>
      <h1>Queue Management</h1>
      {!selectedQueue ? (
        <QueueList onSelectQueue={setSelectedQueue} />
      ) : (
        <QueueDetails queueName={selectedQueue} />
      )}
    </div>
  );
}

export default App;
