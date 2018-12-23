import mongoose from 'mongoose'
import ArticleSchema from '../models/Article'

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

}

const deleteArticle = (req , res) => {

}

const getArticle = (req , res) => {

}

module.exports = {
	addArticle,
	updateArticle,
	deleteArticle,
	getArticle
}