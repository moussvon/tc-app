const mongoose = require('mongoose')
const AdminSchema = require('../models/Admin')


const Admin = mongoose.model('Admin' , AdminSchema )

const addAdmin = (req , res) => {
	res.json({

	})
}

const updateAdmin = (req , res) => {
	res.json({

	})
}

const deleteAdmin = (req , res) => {
	res.json({

	})
}

const getAdmin = (req , res) => {
	res.json({
		
	})
}

module.exports = {
	addAdmin,
	updateAdmin,
	deleteAdmin,
	getAdmin
}