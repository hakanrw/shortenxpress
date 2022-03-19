const { Sequelize, Model, DataTypes } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = sequelize;