const express = require('express')
const router = express.Router()

const {registerUser, loginUser, logoutUser} = require('../controllers/authController')

router.post('/register', registerUser).post('/login', loginUser).get('/logout', logoutUser)

module.exports = router



