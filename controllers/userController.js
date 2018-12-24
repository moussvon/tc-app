import mongoose from 'mongoose'
import UserSchema from '../models/User'


const User = mongoose.model('User' , UserSchema )

const addUser = (req , res) => {
	const newUser = new User(req.body)
	newUser.save( (err, User) =>{
		if(err){
			res.send(err)
		}else{
			res.json(User)
		}
	})
}

const updateUser = (req , res) => {
	User.findOneAndUpdate(
		req.params.idUser,
		req.body,
		{new: 'true'},
		(err, User) => {
			if (err) res.send(err)
			res.json(User)
		}
	)
}

const deleteUser = (req , res) => {
	User.findOneAndDelete(
		req.params.idUser,
		(err) => {
			res.send(err)
		})
}

const getUser = (req , res) => {
	const id = req.params.idUser
	if(id !== undefined){
	const user = User.find({_id: req.params.idUser}, (err, user) =>{
		if(err) res.send(err)
		res.json(user)
	})
}
else{
	const user = User.find({}, (err, user) =>{
		if(err) res.send(err)
		res.json(user)
	})
}
}

module.exports = {
	addUser,
	updateUser,
	deleteUser,
	getUser
}