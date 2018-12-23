import mongoose from 'mongoose'
import groupeSchema from '../models/Groupe'


const Groupe = mongoose.model('Groupe' , groupeSchema )

const addGroupe = (req , res) => {

}

const updateGroupe = (req , res) => {

}

const deleteGroupe = (req , res) => {

}

const getGroupe = (req , res) => {
	
}

module.exports = {
	addGroupe,
	updateGroupe,
	deleteGroupe,
	getGroupe
}