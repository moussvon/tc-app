import mongoose from 'mongoose'
import todoSchema from '../models/Todo'


const Todo = mongoose.model('Todo' , todoSchema )

const addTodo = (req , res) => {

}

const updateTodo = (req , res) => {

}

const deleteTodo = (req , res) => {

}

const getTodo = (req , res) => {
	
}

module.exports = {
	addTodo,
	updateTodo,
	deleteTodo,
	getTodo
}