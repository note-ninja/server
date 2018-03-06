import Sequelize from 'sequelize';
import { config } from '../config.js';
import note from './models/note.js';
import user from './models/user.js';

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.engine,
  define: {
    charset: 'utf8',
    collate: 'utf8_polish_ci',
  },
});


export const db = {
  Sequelize,
  sequelize,
  note: note(sequelize, Sequelize),
  user: user(sequelize, Sequelize),
};
