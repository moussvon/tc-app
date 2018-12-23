const express = require('express') ; 
const articleRouter = express.Router() ; 


const articleController = require('../controllers/articleController')

articleRouter.post('/add', articleController.addArticle)
articleRouter.get('/', (req, res, next) =>{
    console.log('am here')
    next()
}, articleController.getArticles)
articleRouter.put('update', articleController.updateArticle)
articleRouter.delete('/delete', articleController.deleteArticle)

module.exports = articleRouter