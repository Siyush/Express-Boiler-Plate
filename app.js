const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

// Body-Parser Middleware...
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});

app.get('/', (req, res) => {
  res.send('Index');
});

app.get('/About', (req, res) => {
  res.send('About');
});
