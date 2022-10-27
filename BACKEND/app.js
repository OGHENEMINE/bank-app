const express = require('express')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 5000 

const app = express()
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
mongoose.connection.on('connected', () => console.log('DB connected...'))

const apiRoute = require('./routes/api/indexRoute')


app.use(cors({
   origin: process.env.FRONTEND_URL,
   optionsSuccessStatus: 200
}))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1', apiRoute)

app.use((err, req, res, next) => {
   res.status(err.statusCode || 500)
   next(err)
});

app.use(errorHandler)


app.listen(port , ()=> console.log(`Server is running at http://localhost:${port}`));

module.exports = app