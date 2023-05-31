const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Profile = require('../models/profile')

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        const profile = await Profile.findOne()
        if (!profile) {
            res.render('index', { projects: projects, profile: new Profile(), errorMessage: 'You haven\'t set up your profile yet!' })
        } else {
            res.render('index', { projects: projects, profile: profile })
        }
    } catch {
        let projects = []
        let profile = new Profile()
        res.redirect('/', { projects: projects, profile: profile })
    }
})

module.exports = router
