const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        res.render('projects/index', { projects: projects })
    } catch {
        res.redirect('/')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        res.render('projects/show', { project: project })
    } catch {
        res.redirect('/')
    }
})

module.exports = router
