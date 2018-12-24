import mongoose from 'mongoose'
import TodoSchema from './Todo'
import DefiSchema from './Todo'
import ArticleSchema from './Article'

const bcrypt = require('bcryptjs')


const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String,
        required: 'User name is required'
    },
    nom: {
        type: String,
        required: 'title is required'
    },
    prenom: {
        type: String,
        required: 'author is required'
    },
    email: {
        type: String,
        required: 'author is required'
    },
    birthdate: {
        type: Date
    },
    todo: {
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

//hashing a password before saving it to the database
UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = UserSchema
