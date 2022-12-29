const Users = require('../models/users');

exports.bannUser = async function(req, res){
    Users.findOne({ where : { pseudo : req.decodedToken.username}})
    .then(user =>{
        if( user.isAdmin)
        {
            Users.update({ 
                isBanned: true
            }, 
            {
                where: {
                  pseudo: req.body.username
                }
              })
            .then(() =>{
                res.status(200).send('Utilisateur banni avec succès');
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send('An error occured');
            })
        }
        else{
            res.status(400).send("Bannissement non autorisé, you are not the owner and you are not admin ");
        }
        })
    
      
}

exports.deBannUser = async function(req, res){
    Users.findOne({ where : { pseudo : req.decodedToken.username}})
    .then(user =>{
        if( user.isAdmin)
        {
            Users.update({ 
                isBanned: false
            }, 
            {
                where: {
                  pseudo: req.body.username
                }
              })
            .then(() =>{
                res.status(200).send('Utilisateur débanni avec succès');
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send('An error occured');
            })
        }
        else{
            res.status(400).send("DéBannissement non autorisé, you are not the owner and you are not admin ");
        }
        })
    
      
}


exports.makeAdmin = async function(req, res){
    Users.findOne({ where : { pseudo : req.decodedToken.username}})
    .then(user =>{
        if( user.isAdmin)
        {
            Users.update({ 
                isAdmin: true
            }, 
            {
                where: {
                  pseudo: req.body.username
                }
              })
            .then(() =>{
                res.status(200).send('Utilisateur est désormais admin avec succès');
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send('An error occured');
            })
        }
        else{
            res.status(400).send("DéBannissement non autorisé, you are not the owner and you are not admin ");
        }
        })
    
      
}