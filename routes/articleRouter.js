import express from 'express'
import articleController from '../controllers/articleController'

const articleRouter = express.Router() ; 

articleRouter.post('/add', articleController.addArticle)
articleRouter.get('/', articleController.getArticle)
articleRouter.put('/update', articleController.updateArticle)
articleRouter.delete('/delete', articleController.deleteArticle)

module.exports = articleRouter