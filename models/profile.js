const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    github: {
        type: String
    },
    description: {
        type: String
    },
    programmingLanguages: [{
        type: String
    }],
    languages: [{
        type: String
    }]
})

module.exports = mongoose.model('Profile', profileSchema)
