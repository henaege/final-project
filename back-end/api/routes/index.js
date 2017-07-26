var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var config = require('../config/config')
var bcrypt = require('bcrypt-nodejs')
var randToken = require('rand-token')

var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

connection.connect()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res)=>{
  const firstName = req.body.name
  const email = req.body.email
  const password = bcrypt.hashSync(req.body.password)

  connection.query(`SELECT email FROM users`, (error, results)=>{
    if (error) throw error
    var emailsArray = []
    for (i = 0; i < results.length; i++){
      emailsArray.push(results[i].email)
    }
    if(emailsArray.includes(email)){
      res.json({msg: "user exists"})
    } else {
      var insertIntoUsers = `INSERT INTO users (email, firstName, lastName, password) VALUES (?,?,?,?)`
    }
  })
})

module.exports = router;
