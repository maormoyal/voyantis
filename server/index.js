// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const queueRoutes = require('./routes/queueRoutes');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

// Use the queue routes
app.use('/api', queueRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
