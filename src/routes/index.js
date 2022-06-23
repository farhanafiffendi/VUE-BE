const express = require('express')

const router = express.Router()

const { register, login, checkLogin } = require('../controllers/auth')

const { auth } = require('../middlewares/auth')

// route
router.post('/register', register)
router.post('/login', login)
router.get('/check', auth, checkLogin)

module.exports = router