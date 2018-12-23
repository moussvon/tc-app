const mongoose = require('mongoose')
const UserSchema = require('../models/User')


const User = mongoose.model('User' , UserSchema )

const addUser = (req , res) => {

}

const updateUser = (req , res) => {

}

const deleteUser = (req , res) => {

}

const getUsers = (req , res) => {
	
}

module.exports = {
	addUser,
	updateUser,
	deleteUser,
	getUsers
}