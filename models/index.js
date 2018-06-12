'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};

var Sequelize = require('sequelize');
var sequelize = new Sequelize('dggj6ca1150cp', 'qzeichnxgtgtpy', 'b4c0cd35ad698b89acfa4e8cba1cab181ff2fa60c0e63c05e63edc37f8176bae', {
  host: 'ec2-23-21-238-28.compute-1.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false,

  define: {
    timestamps: false,
    freezeTableName: true
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
