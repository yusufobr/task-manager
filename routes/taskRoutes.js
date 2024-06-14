const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTaskById);
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;
