import express from 'express'
import Mongoose from 'mongoose'
import bodyParser from 'body-parser'

import articleRouter from './routes/articleRouter'
import userRouter from './routes/userRouter'
import commentRouter from './routes/commentRouter'
import defiRouter from './routes/defiRouter'
import groupeRouter from './routes/groupeRouter'
import tacheRouter from './routes/tacheRouter'
import todoRouter from './routes/todoRouter'

//Global variables
const app = express()

//Connect the database named TC_DB
Mongoose.Promise = global.Promise 
Mongoose.connect('mongodb://localhost/TC_DB',{ useNewUrlParser: true })

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/article',articleRouter) ;
app.use('/user' , userRouter) ;
app.use('/comment' , commentRouter) ;
app.use('/defi' , defiRouter) ;
app.use('/groupe' , groupeRouter) ;
app.use('/tache' , tacheRouter) ;
app.use('/todo' , todoRouter) ;

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})