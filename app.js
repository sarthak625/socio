// Import libraries
const express = require('express');
const path    = require('path');

// Initialize the env from config.env
require('dotenv').config();

// Set the view engine as express
app.set('view engine','ejs');

// Configure the default static directory
app.use(express.static(path.join(__dirname, 'assets')));

// Initialize express
const app     = express();

let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at port: ${port}`));