const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.body)
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});