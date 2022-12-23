const express = require('express');
const router = express.Router();

const token_auth = require('../middlewares/token_auth');
const fileLoader = require('../middlewares/add_file');
const profil = require('../controllers/profil.js');

router.get('/show', token_auth, profil.findUser);
router.post('/modify', token_auth, fileLoader, profil.modifyUser);

module.exports = router;