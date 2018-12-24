import express from 'express'
import Mongoose from 'mongoose'
import bodyParser from 'body-parser'

const session = require('express-session')
const expressValidator = require('express-validator')

import articleRouter from './routes/articleRouter'
import userRouter from './routes/userRouter'
import commentRouter from './routes/commentRouter'
import defiRouter from './routes/defiRouter'
import groupeRouter from './routes/groupeRouter'
import tacheRouter from './routes/tacheRouter'
import todoRouter from './routes/todoRouter'
import authRouter from './routes/AuthRouter'


//Global variables
const app = express()

//Connect the database named TC_DB
Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/TC_DB', { useNewUrlParser: true })

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//ExpressSession 
app.use(session({
    secret: 'This is a Secret',
    resave: true,
    saveUninitialized: false
}))

//Using express-Validator Middleware
app.use(expressValidator());

// Require Login Middlware
const requiresLogin = (req, res, next)=>{
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
 	res.json({
 		err : 'Access Refused'
 	})
  }
}

app.use('/article',requiresLogin, articleRouter);
app.use('/user',requiresLogin, userRouter);
app.use('/comment',requiresLogin, commentRouter);
app.use('/defi',requiresLogin, defiRouter);
app.use('/groupe',requiresLogin, groupeRouter);
app.use('/tache',requiresLogin, tacheRouter);
app.use('/todo',requiresLogin, todoRouter);
app.use('/auth', authRouter);
app.get('/', (req, res) =>{
    res.send("Improve app is coming")
})

app.listen(80, () => {
    console.log('Server is listening on port 3000')
})
