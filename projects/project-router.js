const express = require('express');

const Projects = require('./model.js');

const router = express.Router();

// Get Projects
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects =>{
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to load projects'})
    })
})

// Adding new Project
router.post('/', (req, res) =>{
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new project'})
    });
});

// Get Tasks
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasks(id)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to get tasks'
        });
    });
});

// Add Task
router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const taskData = req.body;

    Projects.addTask(taskData, id)
    .then(newtask => {
        res.status(200).json(newtask);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to add task'
        })
    })
})

module.exports = router;