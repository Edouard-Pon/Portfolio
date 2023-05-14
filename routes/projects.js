const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.get('/', async (req, res) =>{
    try {
        const projects = await Project.find()
        res.render('projects/index', { projects: projects })
    } catch {
        res.redirect('/')
    }
})

router.get('/new', async (req, res) => {
    try {
        res.render('projects/new', { project: new Project() })
    } catch {
        res.redirect('projects/')
    }
})

router.post('/', async (req, res) => {
    try {
        const newProject = new Project({
            title: req.body.title,
            uploadDate: req.body.uploadDate,
            updateDate: req.body.updateDate,
            sourceCode: req.body.sourceCode,
            description: req.body.description,
            coverImageLink: req.body.coverImageLink
        })
        await newProject.save()
        res.redirect(`projects/${newProject.id}`)
    } catch {
        res.render('projects/new', { project: new Project(), errorMessage: 'Error creating new Project!' })
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

// Delete Project Page
router.delete('/:id', async (req, res) => {
    let project
    try {
        project = await Project.findById(req.params.id)
        await project.remove()
        res.redirect('/projects')
    } catch {
        if (project != null) {
            res.render('projects/show', {
                project: project,
                errorMessage: 'Could not remove Project'
            })
        } else {
            res.redirect('/')
        }
    }
})

module.exports = router