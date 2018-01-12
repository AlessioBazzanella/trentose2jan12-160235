const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const uuid = require('uuid-v4');

// Array dati (al posto del db)
// Assegnazione dati iniziali per non avere il db vuoto all'inizio
const astronauts = [
    {
        firstName: "Alberto",
        lastName: "A",
        id: uuid(),
        isInSpace: true
    },
    {
        firstName: "Federica",
        lastName: "B",
        id: uuid(),
        isInSpace: true
    },
    {
        firstName: "Mario",
        lastName: "C",
        id: uuid(),
        isInSpace: false
    }
];

// Ritorna tutti gli astronauti
router.get('/', function (req, res) {
    res.json(astronauts);
});

// Creazione di un astronauta
router.post('/', function (req, res) {
    const newAstronauts = {};
    newAstronauts.id = uuid();
    if ('firstName' in req.body) {
        newAstronauts.firstName = req.body.firstName;
    }
    if ('lastName' in req.body) {
        newAstronauts.lastName = req.body.lastName;
    }
    if ('isInSpace' in req.body) {
        req.body.isInSpace === "true" ? newAstronauts.isInSpace = true : newAstronauts.isInSpace = false;
    }
    astronauts.push(newAstronauts);
    res.json(newAstronauts);
});

module.exports = router;
