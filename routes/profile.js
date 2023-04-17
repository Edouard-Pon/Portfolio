const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find().exec()
        res.render('profile/index', { profile: profile })
    } catch {
        res.redirect('/')
    }
})

router.get('/new', (req, res) => {
    res.render('profile/new', { profile: new Profile() })
})

module.exports = router
