const express = require('express') ; 
const userRouter = express.Router() ; 

const userController = require('../controllers/userController')

userRouter.post('/add', userController.addUser)
userRouter.get('/',userController.getUsers)
userRouter.put('update',userController.updateUser)
userRouter.delete('/delete',userController.deleteUser)

module.exports = userRouter