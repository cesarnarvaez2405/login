const {Pool} = require ('pg')

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password:'admin',
    database:'firstapi',
    port:'5432'
})

const getUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response.rows)
    res.status(200).json(response.rows)
}

const createUser = async(req, res) => {

    const {name, email} = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]); 
    console.log(response)
    res.send('Usuario creado')
    
}

module.exports = {
    getUser,
    createUser
}