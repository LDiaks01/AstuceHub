const passport = require('passport');
const bcrypt = require("bcrypt")
const User = require("../models/users");
const LocalStrategy = require('passport-local').Strategy;
const { Op } = require("sequelize");

/*avant d'authentifier les demandes, verifier les informations
d'identification username et password en utilisation la LocalStrategy login.*/

//Définition de la LocalStrategy
passport.use(
    'login',
new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) 
    {
        User.findOne({ 
            where: {
                email : email
                //Vérification par pseudo / email
               /* [Op.or]: [
                  { pseudo: email },
                  { email: email }
                ]*/
              }
            })
        .then(user => {
            //Verification du mot de passe hashé
            bcrypt.compare(password, user.password)
            .then(result => {
                if(result) {
                    // appel de la fonction callback pour passer au suivant
                    return done(null, user);
                }
                else
                {
                    return done(null,false);
                }
            })
            .catch(err => {
                console.log(err);
                //Logging des erreurs
                return done(null,false);
            })
       
        })
        .catch(err => {
            console.log(err);
            return done(null, false);
        })

    })
);
