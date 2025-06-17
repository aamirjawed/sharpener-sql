const express = require("express")

const db= require('./utils/db-connection')
const studentsRoutes  = require('./routes/studentsRoutes')
const busUserRoutes  = require('./routes/busUserRoutes')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/students', studentsRoutes)



// Bus user

app.use('/bus', busUserRoutes)

db.sync({force:true}).then(() => {
    app.listen(3000, (err) => {
    console.log("Server is running of 3000")
})
}).catch((err) => {
    console.log(err)
})

