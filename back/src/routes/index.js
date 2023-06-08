const {Router} = require('express')
const router = Router()
const {getUser, createUser} = require('../controllers/index.controllers')


router.get('/users', getUser )
router.post('/users', createUser)

module.exports = router