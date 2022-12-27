const express = require('express');//appel de express
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());//pouvoir envoyer les données en format json

const path = require('path');
app.use('/files', express.static(path.join(__dirname, 'files')));


//routes
const accueil = require('./routes/accueil');
const register = require('./routes/register');
const login = require('./routes/login');
const profil = require('./routes/profil');
const astuces = require('./routes/astuce');
const auth_test = require('./routes/o_auth_login');
const commentaires = require('./routes/commentaires');
app.use('/accueil', accueil);
app.use('/register', register);
app.use('/login', login);
app.use('/profil', profil);
app.use('/astuces', astuces);
app.use('/auth', auth_test);
app.use('/commentaires',commentaires);


const Users = require('./models/users');
const Astuces = require('./models/astuces');
const Commentaires = require('./models/commentaires');

const { Tags, AstuceTag} = require('./models/Tags');

Users.sync().then(()=>{

    Astuces.sync().then(()=>{

        Commentaires.sync().then( ()=>{

            Tags.sync().then(()=>{
                
                AstuceTag.sync();
            });
        })
    })
})






module.exports = app;
  
