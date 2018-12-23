import mongoose from 'mongoose'
import commentSchema from '../models/Comment'


const Comment = mongoose.model('Comment' , commentSchema )

const addComment = (req , res) => {

}

const updateComment = (req , res) => {

}

const deleteComment = (req , res) => {

}

const getComment = (req , res) => {
	
}

module.exports = {
	addComment,
	updateComment,
	deleteComment,
	getComment
}