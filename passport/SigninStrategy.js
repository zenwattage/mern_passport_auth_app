const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const LoginStrategy = new Strategy({ usernameField: 'email'}, function(email, password, done) {
  //what should be happening once user is signing up
  User.findOne({ email }).lean().exec((err, user) => {
    if (err) {
      return done(err, null);
    }
    if (!user) {
      return done('No user found', null);
    }
    
    //check if password is correct
    const isPasswordValid = bcrypt.compareSync(password, user.password); // true

    if (!isPasswordValid) {
      return done('Email or Password not valid', null);
    }

    return done(null, user);

  });
});

module.exports = LoginStrategy;