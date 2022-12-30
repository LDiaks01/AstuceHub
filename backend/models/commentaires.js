const { Sequelize, DataTypes } = require('sequelize');
const keys = require('../keys/keys');
const Users = require('./users');
const Astuces = require('./astuces');

const sequelize = new Sequelize(keys.databaseName, keys.username, keys.password, {
    host: keys.host,
    dialect:'mysql',
    logging: false
  });


   
const Commentaires = sequelize.define('Commentaires', {
    // Model attributes are defined here
    IdCommentaire:{ 
      type: DataTypes.INTEGER,
      primaryKey: true, //clé primaire
      autoIncrement: true,
      
    },

    creator:{ 
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    IdAstuce:{ 
        type: DataTypes.INTEGER,
        allowNull: false
    },

    commentaire:{ 
        type: DataTypes.STRING(100),
        allowNull: false
    }
  
  });
  
Users.hasMany(Commentaires, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    foreignKey: {
      name: 'creator'
    },
    sourceKey: 'email'
});

Commentaires.belongsTo(Users,{
  foreignKey: {
    name: 'creator'
  },
  targetKey: 'email'
});

  // relation entities
Astuces.hasMany(Commentaires, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    foreignKey: {
      name: 'IdAstuce'
    },
    sourceKey: 'IdAstuce'
  });
Commentaires.belongsTo(Astuces,{
  foreignKey: {
    name: 'IdAstuce'
  },
  targetKey: 'IdAstuce'
});

//Exportation de la variable pour un accès en dehors du fichier
module.exports = Commentaires;
