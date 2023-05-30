const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        res.render('index', { projects: projects })
    } catch {
        let projects = []
        res.redirect('/', { projects: projects })
    }
})

module.exports = router
