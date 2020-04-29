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

// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/parenting_app', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.once('open', () =>{
  console.log(`Parenting App Database Open`)
});

// Start the API server
app.listen(PORT, function() {
  console.log(`Parenting App Server now listening on PORT ${PORT}!`);
});

