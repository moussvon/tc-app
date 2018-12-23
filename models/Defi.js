import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DefiSchema = new Schema({
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
    status: {
        type: String
    },
    duration: {
        type: Number,
        default: 0
    },
    date:{
        type: Date
    }
})

module.exports = DefiSchema