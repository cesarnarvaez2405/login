const {Router} = require('express')
const router = Router()
const {getUser, createUser, getUserByiD, deleteUser, updateUser, getLogin} = require('../controllers/index.controllers')


router.get('/users', getUser )
router.get('/users/:id', getUserByiD)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

router.post('/login', getLogin)

module.exports = router