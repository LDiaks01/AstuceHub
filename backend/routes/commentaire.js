const express = require('express');
const router = express.Router();
const commentaire = require('../controllers/commentaire');
const fileLoader = require('../middlewares/add_file');


router.post('/add', commentaire.addComment);
/*appel de la fonction du controlleur qui va se charger d'afficher 
ok si l'utilisateur s'est bien enregistré, ko sinon*/



module.exports = router;