const express = require("express")
const mysql = require("mysql2")
const app = express()

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'testDB'
})

connection.connect((err) => {
    if(err){
        console.log(err)
        return
    }

    console.log('Database connection has been created')

    const creationQuery = `create table students(
        id int auto_increment primary key,
        name varchar(20),
        email varchar(20)

    )`

    connection.execute(creationQuery, (err) => {
        if(err){
            console.log(err)
            connection.end()
            return
        }

        console.log('Table is created')
    })
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, (err) => {
    console.log("Server is running of 3000")
})