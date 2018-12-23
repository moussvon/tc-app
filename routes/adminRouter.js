const express = require('express') ; 
const adminRouter = express.Router() ; //to revise

const adminController = require('../controllers/adminController')


adminRouter.post('/add', adminController.addAdmin)
adminRouter.get('/', adminController.getAdmin)
adminRouter.put('update', adminController.updateAdmin)
adminRouter.delete('/delete', adminController.deleteAdmin)

module.exports = adminRouter