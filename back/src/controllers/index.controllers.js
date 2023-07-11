const {Pool} = require ('pg')
const bcrypt = require('bcryptjs')

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password:'admin',
    database:'apiCesar',
    port:'5432'
})

const getUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response.rows)
    res.status(200).json(response.rows)
}

const getUserByiD = async (req, res) => {
    // res.send('user id:'+ req.params.id )
    const id = req.params.id 
    const response = await pool.query('SELECT * FROM users WHERE id = $1',[id])
    res.json(response.rows)
}

// Se realizo algunos ajustes en esta funcion, se agrego la validacion de los campos Middlewares
// y ademas se agrego el tema de los status, al momento de errores o no

const createUser = async(req, res) => {

    const password = req.body.password

    //Encriptar constraseña
    const salt = bcrypt.genSaltSync();
    const encryptedPassword = await bcrypt.hash(password, salt)

    const {name, email} = req.body;



    const response = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, encryptedPassword]); 

    // let usuario = await response.findOne({email})

    // if (usuario){
    //     return res.status(400).json({
    //         ok:false,
    //         msg:'El usuario ya existe'
    //     })
    // }
    
    res.status(201).json({
            ok: true,
            msg: 'registro',
            name,
            email,
            password
        })
}

const updateUser = async(req, res) => {

    const id = req.params.id
    const {name, email} = req.body
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3'[
        name,
        email,
        id
    ])
    console.log(response);
    res.send('Cambio realizado realizada')

}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    res.send('Usuario eliminado')

}

const getLogin = async(req, res) => {
   const response = await pool.query('SELECT * FROM login WHERE username = $1 AND password = $2',[
    req.body.username,
    req.body.password
   ])
    console.log(response);
    res.send('Consulta realizada')
}

module.exports = {
    getUser,
    getUserByiD,
    createUser,
    updateUser,
    deleteUser,
    getLogin
}