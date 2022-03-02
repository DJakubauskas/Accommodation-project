const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Mongoose = require('mongoose');

require('dotenv').config();
const accommodationRouter = require('./routes/accommodation-router');

const server = express();
const { 
  SERVER_PORT,
DB_CONNECTION,
 } = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(cors());
server.use(express.static('public'));
server.use(express.json());

// Response handlers

server.use('/api/accommodations', accommodationRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
