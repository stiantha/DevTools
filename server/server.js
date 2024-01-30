// npm init -y
// npm install express
// npm install dotenv

// Setup
require('dotenv').config();
const express = require('express');
const toolsRoutes = require('./routes/tools');

// App
const app = express();
// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/tools', toolsRoutes);

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});