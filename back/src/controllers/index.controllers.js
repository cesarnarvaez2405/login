const {Pool} = require ('pg')

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

const createUser = async(req, res) => {

    const {name, email, password} = req.body;
    const response = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]); 
    console.log(response)
    res.send('Usuario creado')
    
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