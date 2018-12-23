import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TacheSchema = new Schema({
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
    	type : [Array], 
    	default : []
    },
    type: {
        type: String
    }
})

module.exports = TacheSchema