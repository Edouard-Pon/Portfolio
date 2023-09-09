const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Profile = require('../models/profile')

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ priority: -1 })
        const profile = await Profile.findOne()
        if (!profile) {
            res.render('index', { projects: projects, profile: new Profile(), errorMessage: 'You haven\'t set up your profile yet!' })
        } else {
            res.render('index', { projects: projects, profile: profile })
        }
    } catch {
        let projects = []
        let profile = new Profile()
        res.render('index', { projects: projects, profile: profile, errorMessage: 'Error' })
    }
})

module.exports = router
