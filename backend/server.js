const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully',
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
