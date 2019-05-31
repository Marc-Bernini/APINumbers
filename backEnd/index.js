// ***** liste des modules installes 
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// ***** my routes *****
const routes = require("./routes/allroutes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/numbersApi', routes.numbersApi); // Route to the API

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  };

  console.log(`Server is listening on port ${port}`);
});