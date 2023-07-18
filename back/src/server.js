const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())



//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes
app.use(require('./routes/index'))

app.listen(8081, () => {
    console.log("Puerto 8081");
})