const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/userController')



authRouter.post('/register', userController.register)
authRouter.post('/login', userController.login)
authRouter.get('/logout' , userController.logout)

module.exports = authRouter