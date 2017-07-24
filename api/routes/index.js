var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');
/* Create database connection. */
var connection = mysql.createConnection({
	host:config.host,
	user:config.user,
	password:config.password,
	database:config.database
});
connection.connect();

/* GET all the tasks. */
router.get('/getTask', function(req, res, next) {
	const userEmail = req.body.email;
	const category = req.body.category;
  	const selectQuery = 'SELECT * FROM tasks WHERE userEmail = ?';
	connection.query(selectQuery, [userEmail] (err, results)=>{
		if(err) throw err;
		res.json(results);
	})
});

module.exports = router;
