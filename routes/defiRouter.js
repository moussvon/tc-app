import express from 'express'
import defiController from '../controllers/defiController'

const defiRouter = express.Router() ; 

defiRouter.post('/add', defiController.addDefi)
defiRouter.get('/', defiController.getDefi)
defiRouter.delete('/delete', defiController.deleteDefi)
defiRouter.put('/update', defiController.updateDefi)

module.exports = defiRouter