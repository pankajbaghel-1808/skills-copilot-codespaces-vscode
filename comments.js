//Create web server
const express = require('express');
const app = express();
const port = 3000;

//To parse the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Create a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  console.log('comment:', comment);
  res.json({ status: 'success' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});