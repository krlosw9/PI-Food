const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dishType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}