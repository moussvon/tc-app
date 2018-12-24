import express from 'express'
import todoController from '../controllers/todoController'

const todoRouter = express.Router() ; 

todoRouter.post('/add', todoController.addTodo)
todoRouter.get('/', todoController.getTodo)
todoRouter.delete('/delete', todoController.deleteTodo)
todoRouter.put('/update', todoController.updateTodo)

module.exports = todoRouter