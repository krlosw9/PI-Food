const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ingredient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}