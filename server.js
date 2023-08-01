if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const profileRouter = require('./routes/profile')
const projectsRouter = require('./routes/projects')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/profile', profileRouter)
app.use('/projects', projectsRouter)

app.listen(process.env.PORT || 3000)
