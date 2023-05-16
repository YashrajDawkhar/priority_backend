const express = require('express')
const cors = require('cors')
require('dotenv').config();
require('./database/connection_db');
const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }))

const course = require('./router/course')
const contact = require('./router/contact')

// app.use((req, res, next) => {
//     res.setHeader('Cache-Control', 'public, max-age=1800'); 
//     next();
// });

app.use('/course', course)
app.use('/contact',contact)


app.listen(process.env.PORT || 3000, function () {
    console.log('listening on port number', process.env.PORT)
})
