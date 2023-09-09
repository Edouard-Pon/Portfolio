const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ priority: -1 })
        res.render('projects/index', { projects: projects })
    } catch {
        res.redirect('/')
    }
})

router.get('/:customUrl', async (req, res) => {
    try {
        const project = await Project.findOne({ customUrl: new RegExp(`^${req.params.customUrl}$`, 'i') })
        if (project === null) res.redirect('/')
        else res.render('projects/show', { project: project })
    } catch {
        res.redirect('/')
    }
})

module.exports = router
