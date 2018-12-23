import mongoose from 'mongoose'
import tacheSchema from '../models/Tache'


const Tache = mongoose.model('Tache' , tacheSchema )

const addTache = (req , res) => {

}

const updateTache = (req , res) => {

}

const deleteTache = (req , res) => {

}

const getTache = (req , res) => {
	
}

module.exports = {
	addTache,
	updateTache,
	deleteTache,
	getTache
}