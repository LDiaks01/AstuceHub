const bcrypt = require('bcrypt');
const Users = require('../models/users');

exports.createUser = (req, res, next) => {
    //Vérification si les données ont bien été envoyées
    if(req.query.password != null && req.query.email != null && req.query.pseudo != null){
       
        bcrypt.hash(req.query.password, 10) //hashage du mot de passe
        .then(hash => {
             //appel de la fonction addUser
             addUser(req, res,hash);
        })
        .catch(error =>{
         console.log(error) ;
         res.status(400).end("KO");
     });
 
     } 
     
     else{
         
      res.status(400).end("Veuillez remplir tous les champs");
 
     }
}

//fonction d'ajout d'un nouvel utilisateur
function addUser(req, res, hash) {
    Users.sync().then(() => {
        Users.create({
            ...req.query,
            password : hash, //remplace le mot de passe par le hash
            imageUrl : req.protocol + '://' + req.get('host') +
             '/files/' + req.file.filename
        })
        .then(() =>{
            console.log('Utilisateur  a été crée avec succès') ;
            res.status(201).end("OK Utilisateur Crée");
        })
        .catch(error =>{
            console.log(error) ;
            //Renvoi d'un code erreur
            res.status(400).end("KO");
    
        } );
    })
    .catch(err => {
        console.error(err);
        res.status(400).send("KO")
    })
}