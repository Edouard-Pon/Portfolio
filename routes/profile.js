const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

router.get('/', async (req, res) => {
    try {
        const profile = await Profile.findOne()
        if (!profile) {
            res.render('profile/index', { profile: new Profile(), errorMessage: 'You haven\'t set up your profile yet!' })
        } else {
            res.render('profile/index', { profile: profile })
        }
    } catch {
        res.redirect('/')
    }
})

module.exports = router
