import express from 'express'
import groupeController from '../controllers/groupeController'

const groupeRouter = express.Router() ; 

groupeRouter.post('/add', groupeController.addGroupe)
groupeRouter.get('/', groupeController.getGroupe)
groupeRouter.delete('/delete', groupeController.deleteGroupe)
groupeRouter.put('/update', groupeController.updateGroupe)

module.exports = groupeRouter