const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const db = require("./index");

const UrlShortner = db.sequelize.define('Url', {
  // Model attributes are defined here
  UrlId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  longUrl: {
    type: DataTypes.STRING
  },
  shortUrl: {
    type: DataTypes.STRING
  },
  shortCode: {
    type: DataTypes.STRING
  }
});


module.exports = UrlShortner;
