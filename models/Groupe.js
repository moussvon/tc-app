import mongoose from 'mongoose'
import UserSchema from './User'
import ArticleSchema from './Article'
import DefiSchema from './Defi'


const Schema = mongoose.Schema

const GroupeSchema = new Schema({
    admin: {
        type: [UserSchema]
    },
    member: {
        type: [UserSchema]
    },
    defi: {
        type: [DefiSchema]
    },
    privacy:{
    	type : Boolean
    },
    tags: {
        type: [String]
    },
    description: {
        type: String
    },
    article: {
        type: [ArticleSchema]
    }
})

module.exports = GroupeSchema