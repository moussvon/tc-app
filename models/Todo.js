import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    nom: {
        type: String,
        required: 'title is required'
    },
    description: {
        type: String,
        required: false
    },
    tags: {
        type: [Array],
        required: false
    },
    taches:{
    	type : [String], 
    	default : []
    },
    type: {
        type: String
    }
})

module.exports = TodoSchema