const express = require("express");
const { addBusUsers, getAllUsers, addBus, availableSeats } = require("../controllers/busUserController");


const router = express.Router();

router.post('/add', addBusUsers)
router.get('/allUsers', getAllUsers)
router.post('/addBus', addBus)
router.get('/available/:seats', availableSeats)


module.exports = router;