const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send("Bienvenue sur notre page d'accueil");
})

module.exports = router;