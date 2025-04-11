const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize-instance');

const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null
  },
  dt_publication: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
}, {
  tableName: 'Article',
  timestamps: false
});

module.exports = Article;
