const db = require('../utils/db-connection')

const addBusUsers = (req, res) => {
    const {name, email} = req.body;

    const addEntries = `insert into bususer (name, email) value (?,?)`

    db.execute(addEntries, [name, email], (err) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        console.log("User has been added")
        res.status(200).send(`User with the name ${name} has been created`)
    })
}


const getAllUsers = (req, res) => {
    
    const getUserQuery = 'select * from bususer'

    db.execute(getUserQuery, (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        if(result.length === 0){
            console.log("No user found")
            return
        }

        console.log("All users details")
        res.status(200).send(result)
    })
}

const addBus = (req, res) => {
    const {busName, busNumber, availableSeats} = req.body;

    const addBusQuery = 'insert into busesdata (busName, busNumber, availableSeats) values (?,?,?)'

    db.execute(addBusQuery, [busName, busNumber, availableSeats], (err) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        console.log("Bus is added")
        res.status(200).send(`Bus with ${busNumber} is added`)
    })
}

const availableSeats = (req, res) => {
    const {seats} = req.params;

    const availableSeatsQuery = `Select * from busesdata where ${seats} > 10`

    db.execute(availableSeatsQuery, [seats], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        if(result.affectedRows === 0){
            console.log("No buses found")
            return;
        }

        console.log("Buses available")
        res.status(200).send("Bus is found")
    })
}

module.exports = {addBusUsers, getAllUsers, addBus, availableSeats}