const express = require('express')
const app = express()
const mysql = require('mysql')

app.get('/', function (req, res) {
  res.send("Hello World")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dbuser',
    password : 's3kreee7',
    database : 'my_db'
  });
  
  connection.connect()
  
  connection.query('SELECT * FROM <TABLE>', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  })
  
  connection.end() 