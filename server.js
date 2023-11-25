const express = require('express');
const cors = require('cors'); // Untuk mengatasi masalah CORS

const app = express();
const port = 3001; // Sesuaikan port sesuai keinginan

app.use(cors()); // Menggunakan middleware CORS

const servants = require('./servant.json');
const war = require('./war.json') // Ganti dengan path ke file JSON Anda

app.get('/api/servants', (req, res) => {
  res.json(servants);
});
app.get('/api/war', (req, res) => {
  const limitedWarData = war.slice(0, 60);
  res.json(limitedWarData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
