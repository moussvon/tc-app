import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ClassSchema = new Schema({
    Name: {
        type: String,
        required: 'Name is required'
    },
    capacity: {
        type: [String]
    },
    photo:{
    	type : String, 
    	default : Date.now
    },
})

module.exports = ClassSchema