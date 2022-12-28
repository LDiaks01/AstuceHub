const Users = require('../models/users');
const Commentaires = require('../models/commentaires');


exports.addComment = (req, res, next) => {
    //Vérification si les données ont bien été envoyées
    console.log(req.body);
    Commentaires.create({
        creator : req.body.creator,
        IdAstuce : req.body.IdAstuce,
        commentaire : req.body.commentaire
    })
    .then(() =>{
        console.log('Commentaire ajouté ') ;
        res.status(201).end("OK Commentaire crée");
    })
    .catch(error =>{
        console.log(error) ;
        //Renvoi d'un code erreur
        res.status(400).end("Erreur");

    } );
    
}
