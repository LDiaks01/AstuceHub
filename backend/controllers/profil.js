const User = require('../models/users');
const { Op } = require("sequelize");

exports.findUser = function(req, res, next) {
    const username = req.query.username;
    if(username == req.decodedToken.username)
    {
        User.findOne({ 
            where: {
                //Vérification par pseudo / email
                [Op.or]: [
                  { pseudo: username },
                  { email: username }
                ]
              }
            })
            .then(user => {
                res.status(200).send({
                    //Données du profil à renvoyer
                 email : user.email,
                 pseudo : user.pseudo,
                 nom : user.nom,
                 prenom : user.prenom,
                 imageUrl : user.imageUrl,
                 isAdmin : user.isAdmin
                }) 
            })
            .catch(err => {
                console.error(err);
                res.status(400).send("User not found");
            })
    }
    else{
        res.status(400).send("Invalid Username/token");
    }
}

//Modification du profil d'un utilisateur
exports.modifyUser = function(req, res, next){
    const IdUser = req.body.userId;
    if(req.file){
        User.update({ 
            nom: req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            pseudo : req.body.pseudo,
            imageUrl : req.protocol + '://' + req.get('host') +
             '/files/' + req.file.filename
        }, 
        {
            where: {
              IdUser: IdUser
            }
          })
        .then(() =>{
            res.status(200).send('Utilisateur modifié avec succès');
        })
        .catch(err =>{
            console.log(err);
            res.status(400).send('An error occured');
        })
    }
    else{
        User.update({ 
            nom: req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            pseudo : req.body.pseudo,
            
        }, 
        {
            where: {
              IdUser: IdUser
            }
          })
          .then(() =>{
            res.status(200).send('Utilisateur modifié avec succès');
        })
        .catch(err =>{
            console.log(err);
            res.status(400).send('An error occured');
        });
    }
    

}