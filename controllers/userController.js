import mongoose from 'mongoose'
import UserSchema from '../models/User'


const User = mongoose.model('User' , UserSchema )

const addUser = (req , res) => {

}

const updateUser = (req , res) => {

}

const deleteUser = (req , res) => {

}

const getUser = (req , res) => {
	
}

module.exports = {
	addUser,
	updateUser,
	deleteUser,
	getUser
}