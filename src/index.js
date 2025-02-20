const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Temporary in-memory database (restarts will erase data)
let tasks = [];

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Create a new task (POST)
app.post("/tasks", (req, res) => {
    const { title, completed = false } = req.body;
    const id = tasks.length + 1;
    const newTask = { id, title, completed };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  
  // Read all tasks (GET)
  app.get("/tasks", (req, res) => {
    res.json(tasks);
  });
  
  // Read a single task (GET)
  app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  });
  
  // Update a task (PUT)
  app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
  
    const { title, completed } = req.body;
    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;
  
    res.json(task);
  });
  
  // Delete a task (DELETE)
  app.delete("/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });
  
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  });