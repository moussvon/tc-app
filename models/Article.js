const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: 'title is required'
    },
    author: {
        type: String,
        required: 'author is required'
    },
    content: {
        type: String,
        required: 'Content is required'
    },
    created_date:{
    	type : Date, 
    	default : Date.now
    }
})

module.exports = ArticleSchema