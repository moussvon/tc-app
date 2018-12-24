import express from 'express'
import tacheController from '../controllers/tacheController'

const tacheRouter = express.Router() ; 

tacheRouter.post('/add', tacheController.addTache)
tacheRouter.get('/', tacheController.getTache)
tacheRouter.delete('/delete', tacheController.deleteTache)
tacheRouter.put('/update', tacheController.updateTache)

module.exports = tacheRouter