const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

let counter = 0;

router.get('/counter', (req, res) => {
  res.status(200).send({ counter });
});

router.post('/counter', (req, res) => {
  counter = req.body.counter;

  setTimeout(() => {
    res.status(201).send({ counter });
  }, 500);
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Express started on port: 3000');
});
