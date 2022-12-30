const Commentaires = require('../models/commentaires');
const Users = require('../models/users');


exports.addComment = async (req, res) => {
    

     console.log(req.body);

    Commentaires.create({
        creator: req.body.creator,
        IdAstuce: req.body.IdAstuce,
        commentaire: req.body.commentaire
    })
    .then(() => {
        console.log('Added comment');
        res.status(201).send("Commentaire ajouté");
    })
    .catch(err => {
        res.status(400).send("Erreur lors de l'ajout du commentaire");
        console.error(err);
    })
    /*
    try{
        const querySql = 
       ` INSERT INTO Commentaires(creator,IdAstuce, commentaire)
       VALUES(?,?,?)
       `;
        const values = [creator,IdAstuce,commentaire];
    }
    catch(error){
        res.status(500).json({error});
    }*/
}

exports.readComment = async(req, res) =>{

    Commentaires.findAll({
        attributes: ['IdCommentaire', 'IdAstuce','creator', 'commentaire'],
        where :{
            IdAstuce : req.query.id
        }
        //spécification des infos à recuperer
    })
    .then(commentaires =>{
        console.log('commentaires envoyés');
        res.status(200).json({
            commentaires : commentaires
        })
    })
    .catch(err =>{
        res.status(500).send("Error when reading comments");
        console.log(err);
    })
    
}     

//suppression d'un commentaire
exports.deleteComment = async(req, res) => {
    Users.findOne({ where : { email : req.decodedToken.username}})
    .then(user =>{
        if(user.isAdmin)
        {
            console.log(req.query.idCommentaire);
            Commentaires.destroy({
                where: { IdCommentaire: req.query.idCommentaire }
            })
            .then(() => {
                res.status(200).send("Commentaire supprimée");
                
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send("Impossible de supprimer ce commentaire");
            });
        }
        else{
            res.status(400).send("Pas les droits de suppression");
        }
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Impossible de vérifier si l'user est admin");
    })
        
}    
