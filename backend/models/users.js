const { Sequelize, DataTypes } = require('sequelize');
const keys = require('../keys/keys');

const sequelize = new Sequelize(keys.databaseName, keys.username, keys.password, {
    host: keys.host,
    dialect:'mysql',
    logging: true
  });

const Users = sequelize.define('Users', {
    // Model attributes are defined here
    IdUser:{ 
      type: DataTypes.INTEGER,
      primaryKey: true, //clé primaire
      autoIncrement: true,
      
    },
    email:{ 
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
  
    },
    pseudo:{ 
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },

    password:{ 
        type: DataTypes.STRING(255),
        allowNull: true
      },
    
    isAdmin:{ 
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },

    isBanned :{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    googleId:{ 
      type: DataTypes.STRING(255),
      allowNull: true

    },

    discordId:{ 
      type: DataTypes.STRING(255),
      allowNull: true
    },

    nom:{ 
      type: DataTypes.STRING(45),
      allowNull: false
    },
  
    prenom:{ 
      type: DataTypes.STRING(45),
      allowNull: false
    },
    imageUrl:{
      type: DataTypes.STRING(100),
      allowNull : true
    }
  
  
  });
  
  //Exportation de la variable pour un accès en dehors du fichier
module.exports = Users;
  