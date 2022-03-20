module.exports = (sequelize, Sequelize) => {
  const URL = sequelize.define("url", {
    id: {
      type: Sequelize.INTGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shortened: Sequelize.STRING,
    full: Sequelize.STRING,
    date: Sequelize.DATE,
  });
  return URL;
};