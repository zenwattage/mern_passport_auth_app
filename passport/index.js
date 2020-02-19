const passport = require('passport');
const User = require('../models/user');
//bring in strategy, configure it, then export it
//import all the strategies
//const GoogleStrategy = require('./GoogleStrategy');

//add user into passport as a session
passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email }).exec((err, user) => {
      done(err, user); //req.user made available
    });
});


//import all stategies
const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;