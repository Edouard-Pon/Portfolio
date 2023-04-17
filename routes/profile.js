const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find()
        if (profile.length === 0) {
            res.render('profile/index', { profile: new Profile(), errorMessage: 'You haven\'t set up your profile yet!' })
        } else {
            res.render('profile/index', { profile: profile[0] })
        }
    } catch {
        res.redirect('/')
    }
})

router.get('/new', async (req, res) => {
    try {
        res.render('profile/new', { profile: new Profile() })
    } catch {
        res.redirect('profile/')
    }
})

router.post('/', async (req, res) => {
    try {
        const profileCheck = await Profile.countDocuments()
        if (profileCheck !== 0) {
            res.render('profile/new', { profile: new Profile(), errorMessage: 'You have already created Profile, you can edit instead!' })
        } else {
            const profile = new Profile({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                description: req.body.description
            })
            await profile.save()
            res.redirect('profile/')
        }
    } catch {
        res.redirect('profile/')
    }
})

module.exports = router
