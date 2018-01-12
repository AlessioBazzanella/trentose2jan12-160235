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

console.log(astronauts);

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

module.exports = router;