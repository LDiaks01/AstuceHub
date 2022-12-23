const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const fileLoader = require('../middlewares/add_file');


router.post('/', fileLoader,register.createUser);
/*appel de la fonction du controlleur qui va se charger d'afficher 
ok si l'utilisateur s'est bien enregistré, ko sinon*/



module.exports = router;