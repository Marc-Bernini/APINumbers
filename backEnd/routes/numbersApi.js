const express = require("express");
const router = express.Router();
const APICall = require('../APICall');

// Body parser module
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

router.get('/', (req, res) => {
    const number = req.query.number;
  
    APICall.makeAPIcall(`http://numbersapi.com/${number}`)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    });
});

module.exports = router;