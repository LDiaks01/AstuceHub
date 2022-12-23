const express = require('express');//appel de express
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());//pouvoir envoyer les données en format json

const path = require('path');
app.use('/files', express.static(path.join(__dirname, 'files')));


const Users = require("./models/users");
const Astuces = require("./models/astuces");
const Commentaires = require("./models/commentaires");

//routes
const accueil = require('./routes/accueil');
const register = require('./routes/register');
const login = require('./routes/login');
const profil = require('./routes/profil');
app.use('/accueil', accueil);
app.use('/register', register);
app.use('/login', login);
app.use('/profil', profil);

/*
Users.sync().then(()=>{
    Astuces.sync().then(()=>{
        Commentaires.sync()
    })
})
*/





module.exports = app;
  
