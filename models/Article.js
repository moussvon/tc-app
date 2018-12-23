import mongoose from 'mongoose'
import UserSchema from './User'

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    user: {
        type: UserSchema,
        required: 'title is required'
    },
    content: {
        type: String,
        required: 'content is required'
    },
    comment: {
        type: [String]
    },
    photo:{
    	type : String, 
    	default : Date.now
    },
    tags:{
        type: [String]
    },
    reaction:{
        type: [UserSchema]
    }
})

module.exports = ArticleSchema