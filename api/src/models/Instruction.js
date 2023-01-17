const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('instruction', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}