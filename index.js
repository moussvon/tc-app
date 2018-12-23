import express from 'express'
import Mongoose from 'mongoose'
import bodyParser from 'body-parser'

import articleRouter from './routes/articleRouter'
import userRouter from './routes/userRouter'
import adminRouter from './routes/adminRouter'

//Global variables
const app = express()

//Connect the database named TC_DB
Mongoose.Promise = global.Promise 
Mongoose.connect('mongodb://localhost/TC_DB',{ useNewUrlParser: true })

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/article',articleRouter) ;
app.use('/admin' , adminRouter) ;
app.use('/user' , userRouter) ;

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})