const mongoose = require('mongoose')
const ArticleSchema = require('../models/Article')

const Article = mongoose.model('Article' , ArticleSchema )

const addArticle = (req , res) => {
	const newArticle = new Article(req.body)
	newArticle.save( (err, article) =>{
		if(err){
			res.send(err)
		}else{
			res.json(article)
		}
	})
}



const updateArticle = (req , res) => {
	res.send('hello')
}

const deleteArticle = (req , res) => {

}

const getArticles = (req , res) => {
	res.json({
		"methode" : "getArticle"
	})

}

module.exports = {
	addArticle,
	updateArticle,
	deleteArticle,
	getArticles
}