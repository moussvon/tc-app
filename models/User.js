import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    nom: {
        type: String,
        required: 'title is required'
    },
    prenom: {
        type: String,
        required: 'author is required'
    },
    email:{
    	type : Date, 
    	default : Date.now
    },
    birthdate: {
        type: Date
    },
    todo:{
        type: [TodoSchema]
    },
    defi: {
        type: [DefiSchema]
    },
    article: {
        type: [ArticleSchema]
    },
    picture: {
        type: String
    },
    password: {
        type: String
    },
    followers: {
        type: [UserSchema]
    },
    following: {
        type: [UserSchema]
    },
    tag: {
        type: [String]
    },
    group: {
        type: [UserSchema]
    }
})

module.exports = UserSchema