// npm init -y
// npm install express
// npm install dotenv

// Setup
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const resourcesRoutes = require('./routes/resourceRoutes');
const port = process.env.PORT;
const cors = require('cors');

// App
const app = express();

// Middleware
app.use(cors()); // Use cors middleware here
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Routes
app.use('/api/resources', resourcesRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Database
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => { 
    console.log(`Connected to DB & running on port ${port}`);
  });
}).catch((err) => {
  console.log(err);
});