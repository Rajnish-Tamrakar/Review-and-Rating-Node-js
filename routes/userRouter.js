const express = require('express')
const router =express.Router()
const user = require('../controllers/userController')

router.post('/registration',user.userSingnup)

module.exports = router