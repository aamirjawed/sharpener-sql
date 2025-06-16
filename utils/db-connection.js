const mysql = require("mysql2")


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'8083571820',
    database:'testdb'
})

connection.connect((err) => {
    if(err){
        console.log(err)
        return
    }

    console.log('Database connection has been created')

    const creationQuery = `create table if not exists students(
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

            console.log("Table is created")
        })    
})

module.exports = connection