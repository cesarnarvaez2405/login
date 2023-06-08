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
    
}

module.exports = {
    getUser,
    createUser
}