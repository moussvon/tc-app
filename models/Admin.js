const mongoose = require('mongoose')

const Schema = mongoose.Schema
const AdminSchema = new Schema({
    title: {
        type: String,
        required: 'title is required'
    },
    author: {
        type: String,
        required: 'author is required'
    },
    created_date:{
    	type : Date, 
    	default : Date.now
    }
})

module.exports = AdminSchema