const express = require('express');//appel de express
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());//pouvoir envoyer les données en format json

const Users = require("./models/users");
const Astuces = require("./models/astuces");
const Commentaires = require("./models/commentaires");


Users.sync().then(()=>{
    Astuces.sync().then(()=>{
        Commentaires.sync()
    })
})





module.exports = app;
  
