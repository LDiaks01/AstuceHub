const express = require('express');//appel de express
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());//pouvoir envoyer les données en format json

/*
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/
const path = require('path');
app.use('/files', express.static(path.join(__dirname, 'files')));

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//routes
const accueil = require('./routes/accueil');
const register = require('./routes/register');

const login = require('./routes/login');
const profil = require('./routes/profil');
const astuces = require('./routes/astuce');
const auth_test = require('./routes/o_auth_login');
const commentaires = require('./routes/commentaires');
const users = require('./routes/users');
app.use('/accueil', accueil);
app.use('/register', register);
app.use('/login', login);
app.use('/profil', profil);
app.use('/astuces', astuces);
app.use('/auth', auth_test);
app.use('/commentaires', commentaires);
app.use('/users', users);


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
  
