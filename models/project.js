const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        required: true
    },
    updateDate: {
        type: Date
    },
    sourceCode: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Project', projectSchema)
