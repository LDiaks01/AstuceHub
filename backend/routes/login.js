const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../controllers/login'); //recupération du controlleur pour l'appel


router.post('/', function(req,res, next) {
/*Passport fournit une fonction, qui est utilisée comme itinéraire
 middleware pour authentifier les demandes.authenticate()*/
    passport.authenticate('login', async function(err,user)
    {
        //verifier si l'utilisateur n'existe pas
        if(err || !user)
        {
            console.log(err);
            res.status(401).send("Bad Crédential / Incorrect User");
        }
        //Enfin si l'utilisateur existe
        if(user.isBanned)
        {
            res.status(401).send("Utilisateur Banni, connexion impossible");
        }
        else if(user)
        {
            let token = jwt.sign(
                {'username' : user.email},
                'GROUPE_7_JWT_KEY',
                { expiresIn: '24h'}
            );
            //retourner le token de l'utilisateur qui s'est authentifié
            res.status(200).send({ 
                isConnected : true,
                token : token,
                username : user.pseudo
            });
        }
    })(req, res, next);
    
});
 


module.exports = router;
