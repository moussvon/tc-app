import express from 'express'
import commentController from '../controllers/commentController'

const commentRouter = express.Router() ; 

commentRouter.post('/add', commentController.addComment)
commentRouter.get('/', commentController.getComment)
commentRouter.delete('/delete', commentController.deleteComment)
commentRouter.put('/update', commentController.updateComment)

module.exports = commentRouter