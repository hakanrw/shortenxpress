module.exports = (sequelize, Sequelize) => {
  const URL = sequelize.define("url", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    short: Sequelize.STRING,
    full: Sequelize.STRING,
    date: Sequelize.DATE,
  });
  return URL;
};