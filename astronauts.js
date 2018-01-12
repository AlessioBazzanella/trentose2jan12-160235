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

// Ritorna un astronauta per id
router.get('/:astronautID', function (req, res) {
    const astronautID = req.params.astronautID;
    const i = astronauts.findIndex(function (item) {
        return item.id === astronautID;
    });
    if (i === -1) res.sendStatus(404);
    else {
        res.status = 200;
        res.json(astronauts[i])
    }
});

// Modifica i dati di un astronauta per id
router.put('/:astronautID', function (req, res) {
    const astronautID = req.params.astronautID;
    const i = astronauts.findIndex(function (item) {
        return item.id === astronautID;
    });
    if ('firstName' in req.body) {
        astronauts[i].firstName = req.body.firstName;
    }
    if ('lastName' in req.body) {
        astronauts[i].lastName = req.body.lastName;
    }
    if ('isInSpace' in req.body) {
        req.body.isInSpace === "true" ? astronauts[i].isInSpace = true : astronauts[i].isInSpace = false;
    }

    res.json(astronauts[i])
});

module.exports = router;
