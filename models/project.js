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
    },
    coverImageLink: {
        type: String
    },
    images: [{
        type: String
    }],
    customUrl: {
        type: String
    },
    priority: {
        type: Number
    }
})

module.exports = mongoose.model('Project', projectSchema)
