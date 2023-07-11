const {response} = require ('express')
const {validationResult} = require('express-validator')

const ValidarCampos = (req, res, next) => {

    const errors = validationResult( req )
    if (!errors.isEmpty()){
        return res.status(400).json({
            ok: false ,
            errors: errors.mapped()
        })
    }


    next()
}

module.exports = {
    ValidarCampos
}