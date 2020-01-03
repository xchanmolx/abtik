const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./database');

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(helmet());
app.use(cors())
app.use(morgan('combined')); // use 'tiny' or 'combined'

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));

if (ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});

db.query('SELECT NOW()', (err, res) => {
    if (err.error)
      return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;