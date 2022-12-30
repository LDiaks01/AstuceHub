const express = require('express');
const router = express.Router();

//import des middlexares
const token_auth = require('../middlewares/token_auth');
const fileLoader = require('../middlewares/add_file');
const profil = require('../controllers/profil.js');

//declaration des routes pour les astuces
router.get('/show', token_auth, profil.findUser);
router.post('/modify', token_auth, fileLoader, profil.modifyUser);

module.exports = router;