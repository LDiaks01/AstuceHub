const Astuces = require('../models/astuces');
const Commentaires = require('../models/commentaires');
const Users = require('../models/users');


//ajout d'astuces qui par défaut ne sont pas approuvées
exports.addAstuce = function(req, res, next) {
    //On cree l'astuce en bd en recuperant les elements depuis le body
    Astuces.create({
        ...req.body,
        creator : req.decodedToken.username,
        isApproved : 0, //par défaut aucune astuce n'est approuvé à sa création
        imageUrl : "à rempllir après"
    })
    .then(()=> {
        res.status(201).send("Astuce crée en attente d'approbation par un admin");
    })
    .catch(err=> {
        res.status(400).send("Erreur : verifiez que vous avez fourni tous les champs");
        console.log(err);
    })
}

// recuperer toutes les astuces approuvées
exports.findAllApprovedAstuces = function(req, res) {
    Astuces.findAll({
        attributes: ['IdAstuce', 'creator', 'tags','titre', 'infosAstuce', 'contenu', 'imageUrl', 'createdAt', 'updatedAt'],
        where :{
            isApproved : 1
        }
        //spécification des infos à recuperer
    })
    .then(astuces =>{
            res.status(200).send({
                users : {
                    astuces : astuces // format json à renvoyer
                }});
        })
    .catch(err =>{
        console.error(err);
        res.status(400).send("Erreur lors de la récuperation des astuces");
    })
}

// Fonction pour récuperer une astuce et ses commentaires depuis la liste des astuces déjà fournie
exports.getAstuce = function(req, res){
    Astuces.findOne({
        include: [{
            model: Commentaires,
            attributes: ['IdCommentaire', 'creator', 'commentaire', 'createdAt', 'updatedAt'],
            include: [{
                model: Users,
                attributes: ['pseudo', 'imageUrl']
            }]
        }],
        attributes: ['IdAstuce', 'creator', 'tags','titre', 'infosAstuce', 'contenu', 'imageUrl', 'createdAt', 'updatedAt'],
        where : { IdAstuce : req.query.IdAstuce}
    })
    .then(astuce => {
        res.status(200).send({
            users : {
                astuce : astuce // format json à renvoyer
            }});
    })
    .catch(err =>{
        console.error(err);
        res.status(400).send("Erreur lors de la récuperation de l'astuce");
    })
}

//recuperer les astuces d'un utilisateur
exports.findAstucesByUser = function(req, res){

    if(req.params.creator == req.decodedToken.username)
    {
        Astuces.findAll({
            attributes: ['IdAstuce', 'creator', 'tags','titre', 'infosAstuce', 'contenu', 'imageUrl', 'isApproved', 'createdAt', 'updatedAt'],
            where :{
                creator : req.params.creator
            }
            //spécification des infos à recuperer
        })
        .then(astuces =>{
                res.status(200).send({
                    users : {
                        astuces : astuces // format json à renvoyer
                    }});
            })
        .catch(err =>{
            console.error(err);
            res.status(400).send("Erreur lors de la récuperation des astuces");
        })
    }
    else{
        res.status(400).send("Accès non autorisé, you are not the owner ");
    }
    
}

//supprimer une astuce d'un utilisateur
exports.deleteAstuce = async function(req, res){
    Users.findOne({ where : { pseudo : req.decodedToken.username}})
    .then(user =>{
        if(req.body.creator == req.decodedToken.username || user.isAdmin)
        {
            Astuces.destroy({
                where: { IdAstuce: req.body.IdAstuce }
            })
            .then(() => {
                res.status(200).send("Astuce supprimée");
                
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send("Impossible de supprimer cette astuce");
            });
        }
        else{
            res.status(400).send("Suppression non autorisée, you are not the owner and you are not admin ");
        }
        })
    
      
}

//approuver une astuce
exports.approveAstuce = function(req,res){
    Users.findOne({ where : { pseudo : req.decodedToken.username}})
    .then(user =>{
        if(user.isAdmin)
        {
            Astuces.update({ 
                isApproved: 1
            }, 
            {
                where: {
                    IdAstuce: req.query.IdAstuce
                }
            })
        .then(() =>{
            res.status(200).send("Astuce approuvée");
          })
        .catch(err =>{
            console.log(err);
            res.status(400).send("Impossible d'approuver cette astuce");
        });
        }
        else{
            res.status(401).send("You need to be an admin");

        }
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send("Impossible d'approuver cette astuce");
    });
    

}