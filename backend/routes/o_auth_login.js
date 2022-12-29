const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../controllers/o_auth_login'); //recupération du controlleur pour l'appel


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', function(req,res, next) {
/*Passport fournit une fonction, qui est utilisée comme itinéraire
 middleware pour authentifier les demandes.authenticate()*/
    passport.authenticate('google', { failureRedirect: '/login' }, async function(err,user) 
    {
        //verifier si l'utilisateur n'existe pas
        if(err || !user)
        {
            console.log(err);
            res.status(401).send("Bad Crédential / Incorrect User");
        }
        //Enfin si l'utilisateur existe
        if(user)
        {
            console.log("auth reussie via google");
            let token = jwt.sign(
                {'username' : user.pseudo},
                'GROUPE_7_JWT_KEY',
                { expiresIn: '24h'}
            );
            //retourner le token de l'utilisateur qui s'est authentifié
            
            res.status(200).send({ 
                isConnected : true,
                token : token
            });
        }
    })(req, res, next);
    
});

router.get('/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }));

router.get('/discord/callback', function(req,res, next) {
    /*Passport fournit une fonction, qui est utilisée comme itinéraire
     middleware pour authentifier les demandes.authenticate()*/
        passport.authenticate('discord', { failureRedirect: '/login' }, async function(err,user) 
        {
            //verifier si l'utilisateur n'existe pas
            if(err || !user)
            {
                console.log(err);
                res.status(401).send("Bad Crédential / Incorrect User");
            }
            //Enfin si l'utilisateur existe
            if(user)
            {
                console.log("auth reussie via discord");
                let token = jwt.sign(
                    {'username' : user.pseudo},
                    'GROUPE_7_JWT_KEY',
                    { expiresIn: '24h'}
                );
                //retourner le token de l'utilisateur qui s'est authentifié
                
                res.status(200).send({ 
                    isConnected : true,
                    token : token
                });
            }
        }
        )(req, res, next);
        
    });
    




module.exports = router;
