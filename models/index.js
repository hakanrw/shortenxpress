const { Sequelize } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.urls = require("./url.model")(sequelize, Sequelize);

module.exports = db;