//notre point d'entrée 
const http = require('http');
const app = require('./app'); //appel 


// Configuration du port d'écoute
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };


  //gérer les erreurs
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Capture et logging des erreurs
const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
  
  // Création du serveur
  const server = http.createServer(app);
  
  server.on('error', errorHandler);
  server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Serveur en écoute sur le ' + bind);
  });
  //indiquer au serveur le port qu'il doit écouter

  
  // Début de l'écoute sur le port configuré en haut

  server.listen(port);
  