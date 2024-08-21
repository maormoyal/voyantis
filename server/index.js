const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const queueRoutes = require('./routes/queueRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', queueRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
