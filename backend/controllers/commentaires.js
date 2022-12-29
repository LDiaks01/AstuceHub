const Commentaires = require('../models/commentaires');
const Users = require('../models/users');


exports.addComment = async (req, res) => {
    

    
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
    /*
    console.log("Je suis dans readComment");
    //Récupération de Creator qui est passé dans l'url de la requete
    const creator = req.originalUrl.split("=")[1];
    console.log(`creator : ${creator}`)

    //Récupération de l'IdAstuce
    const IdAstuce = req.params.id;  
    console.log(`IdAstuce : ${IdAstuce}`)

    //Récuperation des données sur la base de données MySql Pour les afficher apres (FrontEnd)
    try{
        const querySql = `SELECT * FROM commentaires WHERE IdAstuce = ? `;
        const Creator = await mysqlconnection.query(
            querySql,
            [IdAstuce],
            (error,results) => {
                if(error) {
                    res.json({error});
                } else{
                    res.status(200).json({results});
                }
            }
        );
    }
    catch (error){
        res.status(500).json({error});

    }
    */
}     
exports.deleteComment = async(req, res) => {
    Users.findOne({ where : { pseudo : req.decodedToken.username}})
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
        /*
        //Chercher l'id de l'objet a supprimer dans la requete
        const id = req.params.id;
        console.log("--> id");
        console.log(id);
        // Requete pour supprimer le commentaire 
        const querySql = `DELETE * FROM commentaires WHERE IdCommentaire = ?`;
        const values = [id];
        console.log("--> values");
        console.log(values);
        // la connexion a la base de données
        mysqlconnection.query(querySql, values,(error, results)=> {
            if(error){
                res.status(500).json({error});
            } else {
                res.status(201).json({
                    message : "le commentaire éffacé dans la base de données",
                    results
                });
            }

        });
         
   */
}    
