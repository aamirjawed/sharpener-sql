const express = require("express")
const mysql = require("mysql2")
const app = express()

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'busbookingdb'
})

connection.connect((err) => {
    if(err){
        console.log(err)
        return
    }

    console.log('Database connection has been created')

    const createUsersTable = `create table usersTable(
        id int auto_increment primary key,
        name varchar(255),
        email varchar(255)
    )`

    const createBusesTable = ` create table busesTable(
        id int auto_increment primary key,
        busNumber varchar(255),
        totalSeats int, 
        availableSeats int
    )`

    const createBookingTable = `create table bookingTable (
        id int auto_increment primary key,
        seatNumber int
    )`

    const createPaymentTable = `create table paymentTable(
        id int auto_increment primary key,
        amountPaid decimal(10,2),
        paymentStatus boolean
    )`
    
   
    
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, (err) => {
    console.log("Server is running of 3000")
})