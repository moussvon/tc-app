import mongoose from 'mongoose'
import UserSchema from './User'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    author: {
        type: UserSchema
    },
    contnet: {
        type: String,
        required: true
    },
    reaction: {
        type: Number,
        default: 0
    }
})

module.exports = CommentSchema