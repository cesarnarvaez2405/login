const {Router} = require('express')
const router = Router()
const { check } = require('express-validator')
const {getUser, createUser, getUserByiD, deleteUser, updateUser, getLogin} = require('../controllers/index.controllers')
const { ValidarCampos } = require('../middlewares/validarCampos')


router.get('/users', getUser )

router.get('/users/:id', getUserByiD)

router.post('/users',
 [
    //middlewares de los campos, si hay dato, si el Email esta correcto y si el largo es el minimo
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        ValidarCampos
    ] 
 ,createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)



router.post('/login', getLogin)

module.exports = router