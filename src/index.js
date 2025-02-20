const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const express = require('express');
const connectDB = require('./config/dbConfig');
const taskRoutes = require('./routes/taskRoutes');

// Configure dotenv with expand
dotenvExpand.expand(dotenv.config());

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});