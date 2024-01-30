// npm init -y
// npm install express
// npm install dotenv

// Setup
require('dotenv').config();
const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Launch
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});