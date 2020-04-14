const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/parenting_app', { useNewUrlParser: true, useUnifiedTopology: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`Parenting App Server now listening on PORT ${PORT}!`);
});
