const connection = require('../utils/db-connection');
const db = require('../utils/db-connection')

const addEntries = (req, res) => {
    const {email, name} = req.body;

    const insertQuery = `insert into students (email, name) values (?,?)`

    db.execute(insertQuery, [email, name], (err) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        console.log("Value has been added")
        res.status(200).send(`Student with name ${name} is successfully created`)
    })
}


const updateEntry = (req,res) => {
    const {id} = req.params;
    const {name} = req.body

    const updateQuery = "update students set name = ? where id = ?"

    db.execute(updateQuery, [name, id], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        if(result.affectedRows === 0){
            res.status(404).send("Student not found")
            return
        }

        res.status(200).send("User has been updated")
    })
}

const deleteEntry = (req, res) => {
    const {id}  = req.params;

    const deleteQuery = "delete from students where id = ?"

    db.execute(deleteQuery, [id], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            db.end()
            return
        }

        if(result.affectedRows === 0){
            res.status(404).send("Student not found");
            return
        }

        res.status(200).send("User has been deleted")
    })
}

module.exports = {addEntries, updateEntry, deleteEntry}