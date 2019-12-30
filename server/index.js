const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// use process.env variables to keep private variables,
require('dotenv').config();

// const db = require('./database');

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'free232469',
    database : 'abtikdb'
  }
});

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(helmet());
app.use(cors(corsOptions))
app.use(morgan('combined')); // use 'tiny' or 'combined'

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));

// Controllers - aka, the db queries
const responders = require('./models/responders');

// App Routes - Auth
app.get('/responders', (req, res) => responders.getTableData(req, res, db));
app.post('/add', (req, res) => responders.postTableData(req, res, db));
app.put('/update', (req, res) => responders.putTableData(req, res, db));
app.delete('/delete', (req, res) => responders.deleteTableData(req, res, db));

if (ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});

// db.query('SELECT NOW()', (err, res) => {
//     if (err.error)
//       return console.log(err.error);
//     console.log(`PostgreSQL connected: ${res[0].now}.`);
// });

module.exports = app;