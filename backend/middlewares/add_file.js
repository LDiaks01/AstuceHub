const multer = require('multer');

//Définition des types de fichiers acceptés par le serveur
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };
  
  
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './files'); // Les fichiers entrants seront dans le dossier files

    },
    filename: (req, file, callback) => {
      //Géneration du nom du fichier à partir de l'original
      const name = file.originalname.split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      //appel de la fonction callback
      callback(null, name + Date.now() +'.'+ extension);
    }
  });
  
  module.exports = multer({storage: storage}).single('file');
