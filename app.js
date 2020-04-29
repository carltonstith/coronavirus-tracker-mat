const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect To Database
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Initialize Express
const app = express();

// Bring in the Users from the Routes Folder
const users = require('./routes/users');
// Bring in the Cases from the Routes Folder
const cases = require('./routes/cases');

// Port Number
const port = 3200;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/cases', cases);
app.use('/daily/', cases);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint!');
});

app.listen(port, () => {
  console.log('Server started on port ' + port)
});