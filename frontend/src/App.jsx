import { useState } from 'react';
import QueueList from './components/QueueList';
import QueueDetails from './components/QueueDetails';
import CreateQueue from './components/CreateQueue';
import styles from './App.module.scss';

function App() {
  const [selectedQueue, setSelectedQueue] = useState(null);
  const [refresh, setRefresh] = useState(false); // State to trigger refresh

  const handleQueueCreated = () => {
    setRefresh(!refresh);
  };

  const handleBack = () => {
    setSelectedQueue(null);
  };

  return (
    <div className={styles.appContainer}>
      <h1>Queue Management</h1>
      <CreateQueue onQueueCreated={handleQueueCreated} />
      {!selectedQueue ? (
        <QueueList onSelectQueue={setSelectedQueue} refresh={refresh} />
      ) : (
        <QueueDetails queueName={selectedQueue} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
