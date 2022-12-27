const { Sequelize, DataTypes } = require('sequelize');
const keys = require('../keys/keys');
const Users = require('./users');

const sequelize = new Sequelize(keys.databaseName, keys.username, keys.password, {
    host: keys.host,
    dialect:'mysql',
    logging: true
  });
   
const Astuces = sequelize.define('Astuces', {
    // Model attributes are defined here
    IdAstuce:{ 
      type: DataTypes.INTEGER,
      primaryKey: true, //clé primaire
      autoIncrement: true
      
    },

    creator:{
        type: DataTypes.STRING(45),
        allowNull : false
    },

    isApproved:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    titre:{ 
      type: DataTypes.STRING(45),
      allowNull: false
  
    },
    
    infosAstuce:{ 
        type: DataTypes.STRING(200),
        allowNull: false
    },
    contenu:{ 
        type: DataTypes.STRING(200),
        allowNull: false
    },
    imageUrl:{
      type: DataTypes.STRING(100),
      allowNull : true
    }
  
  });

Users.hasMany(Astuces, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    foreignKey: {
      name: 'creator'
    },
    sourceKey: 'pseudo'
  });
Astuces.belongsTo(Users,{
  foreignKey: {
    name: 'creator'
  },
  targetKey: 'pseudo'
});
  
//Exportation de la variable pour un accès en dehors du fichier
module.exports = Astuces;
  