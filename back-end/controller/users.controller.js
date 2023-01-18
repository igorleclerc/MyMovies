const db = require("../database.js")
const {response} = require("express");
const bcrypt = require('bcrypt');
const connection = db.connection;
const jwt = require('jsonwebtoken')


connection.connect()

module.exports.movies = function (req, res){
    connection.query('SELECT * from mymovies.movies',
        function (err, results){
            res.send(results)
        });
};

module.exports.login = async function(req, res) {
    const {email, password} = req.body
    const token = jwt.sign({email}, 'secretKey')
    res.json({token})
    /*
    // Get the email and password from the request body
  const { mail, password } = req.body
  // Find the user with the provided email in the database
  connection.query('SELECT * FROM user WHERE mail = ?', [mail], (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    if (!results || !results.length) {
      res.status(401).send('Email ou mot de passe incorrect')
    } else {
      // Compare the provided password with the hashed password in the database
      const user = results[0]
      const isPasswordValid = bcrypt.compareSync(password, user.password)
      if (!isPasswordValid) {
        res.status(401).send('Email ou mot de passe incorrect')
      } else {
        // Create a JWT token
        const token = jwt.sign({ mail: user.mail }, 'secretKey')
        res.json({ token })
      }
    }
  })
})
     */
}


module.exports.register = async function(req, res){

    let password = req.body.password
    let mail = req.body.mail

    await bcrypt.genSalt(5, function(err, salt) {
        if (err)
            throw (err)
        bcrypt.hash(password, salt, function(err, hash) {
            // Refers to the hashed password with 'hash'
            connection.query('INSERT INTO `mymovies`.`users` (`mail`, `password`) VALUES (?, ?)',[mail, hash],  function (err, results, fields) {
                if (err)
                    throw (err)
                else {
                    console.log(results)
                    res.send(results)
                }
            })

        });
    });
}

exports.users = function (req, res){
    connection.query('SELECT * from mymovies.users',
        function (err, results){
            res.send(results)
        });
};
