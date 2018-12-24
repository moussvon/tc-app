import express from 'express'
import userController from '../controllers/userController'

const userRouter = express.Router() ; 

userRouter.post('/add', userController.addUser)
userRouter.get('/',userController.getUser)
userRouter.put('/update',userController.updateUser)
userRouter.delete('/delete',userController.deleteUser)

module.exports = userRouter