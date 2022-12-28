const { Sequelize, DataTypes } = require('sequelize');
const keys = require('../keys/keys');
const Astuces = require('./astuces');

const sequelize = new Sequelize(keys.databaseName, keys.username, keys.password, {
    host: keys.host,
    dialect:'mysql',
    logging: false
  });

const Tags = sequelize.define('Tags', {
    // Model attributes are defined here
    IdTag:{ 
      type: DataTypes.INTEGER,
      primaryKey: true, //clé primaire
      autoIncrement: true,
      
    },
    tag:{ 
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
  
    }
}
);

//Relation de plusieurs à plusieurs entre les astuces et les tags

const AstuceTag = sequelize.define('astuceTag', {
    astuceId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Astuces,
        key: 'IdAstuce'
      }
    },
    tagId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Tags,
        key: 'IdTag'
      }
    }
  });
  
Astuces.belongsToMany(Tags, { through: AstuceTag });
Tags.belongsToMany(Astuces, { through: AstuceTag });


module.exports = { Tags, AstuceTag};