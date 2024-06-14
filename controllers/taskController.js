const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const task = await newTask.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update a task by ID
exports.updateTaskById = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Delete a task by ID
exports.deleteTaskById = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
