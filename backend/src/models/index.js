/* eslint-disable global-require */
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { Sequelize } from 'sequelize';
import configEnv from '../config';

const basename = _basename(__filename);
const config = configEnv.database;
const db = {};

const sequelize = new Sequelize(config.url, { logging: false });

readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    // eslint-disable-next-line import/no-dynamic-require
    const model = require(join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
