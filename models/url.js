const { Model, DataTypes } = require('@sequelize/core');
const sequelize = require("./sequelize");

class URL extends Model {}
URL.init({
  id: {
    type: DataTypes.INTGER,
    primaryKey: true,
    autoIncrement: true,
  },
  shortened: DataTypes.STRING,
  full: DataTypes.STRING,
  date: DataTypes.DATE,
}, { sequelize, modelName: 'url' });