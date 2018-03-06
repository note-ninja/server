import express from 'express';
import { config } from './config.js';
import { db } from './src/db.js';

const app = express();

app.get('/', (req, res) => {
  res.send('xdddd');
});

db.sequelize.sync().then(function() {
  console.log('Database is synced');
});

app.listen(config.port, () => {
  console.log(`Notes.ninja server is running on port ${config.port}`);
});
