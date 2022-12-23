const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        //Récupération du token envoyé par l'utilisateur, qui se trouve dans les headers
        const token = req.headers.authorization.split(' ')[1];
        let tkn = jwt.verify(token, 'GROUPE_7_JWT_KEY');
        req.decodedToken = { username : tkn.username};
        //On passe le rélai à la fonction suivante
        next();
    }
    catch (err) {
        //Affichage des erreurs en console et renvoi à l'utilisateur
        console.error(err)
        res.status(401).send("An error occured when veriying your token");
    }
}