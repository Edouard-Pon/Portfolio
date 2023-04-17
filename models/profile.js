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
    age: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Profile', profileSchema)
