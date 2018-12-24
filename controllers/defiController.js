import mongoose from 'mongoose'
import defiSchema from '../models/Defi'
import UserSchema from '../models/User'


const Defi = mongoose.model('Defi' , defiSchema )
const User = mongoose.model('User' , UserSchema )


const addDefi = (req , res) => {
	const newDefi = new Defi(req.body)
	newDefi.save( (err, User) =>{
		if(err){
			res.send(err)
		}else{
			res.json(Defi)
		}
	})
	User.findById(req.query.idUser , (err , user) => {
		user.todo.push(newDefi)
		user.save()
	}) 
}

const updateDefi = (req , res) => {

}

const deleteDefi = (req , res) => {

}

const getDefi = (req , res) => {
	
}

module.exports = {
	addDefi,
	updateDefi,
	deleteDefi,
	getDefi
}