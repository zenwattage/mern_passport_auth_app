var express = require('express');
var router = express.Router();
const passport = require('../passport');
// var logout = require('express-passport-logout');


router.get('/logout', function (req, res, next) {
  if (error) {
    return res.status(500).json({
      message: error || 'Oops, something happened!',
    });
  }

  window.localStorage.removeItem('isAuthenticated');


  // req.logout();

  // req.session = null;
  // req.session.destroy();
  // localStorage.removeItem(isAuthenticated);
  // next();
  // user.isAuthenticated = false;
  res.redirect('/');
});

router.post('/signup', (req, res, next) => {
  // Custom Passport Callback
  //passing json back into object
  //first(takes callback) second(takesrequestobject)
  passport.authenticate('local-signup', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops, something happened!',
      });
    }

    //persistent login
    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }
      user.isAuthenticated = true;
      //TODO - dont send password to user client
      return res.json(user);
    });

  })(req, res, next);
});


router.post('/signin', function (req, res, next) {

  passport.authenticate('local-signin', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || 'Oops, something happened!',
      });
    }

    //persistent login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }

      user.isAuthenticated = true;
      //TODO - dont send password to user client
      // if (!user.isAuthenticated) {
      //   res.redirect('/');
      // }
      return res.json(user);

    });
  })(req, res, next);
});

router.get('/api', (req, res) => {
  const email = req.users; //req.session.passport.session
  console.log(req.session.passport.session);

  res.json({
    message: 'Hello World'
  });
});




// router.get('/logout', function (req, res) {
//   req.logout(); req.session.destroy(function (err) {
//     if (err) {
//       return next(err);
//     }
//     return res.send({ success: true });
//   });
// });







// router.get('/logout'), (req, res) => {
//   res.console.log('inside logout');
//   req.session = null;
//   req.logout();
//   // delete req.session;
//   // return redir(res, returnTo);
// };



// router.get('/logout', function (req, res) {
//   console.log('inside logout function');

//   req.logout();
//   res.send(true);
// });

// router.use(session(
//   {
//     // secret: process.env.SECRET,
//     // store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     // saveUninitialized: false,
//     resave: false
//   }
// ));





// router.get('/logout', function (req, res) {
//   req.clearCookie();
//   req.session.destroy();
//   res.status(200).clearCookie('connect.sid', {
//     path: '/'
//   });
//   res.redirect('/');
//   req.session.destroy(function (err) {

//   });
// });



// router.get('/logout', (req, res) => {
//   req.logOut();
//   req.session.destroy(() => {
//     window.localStorage.isAuthenticated = false;
//     req.session = null;
//     // res.clearCookie('connect.sid');
//     res.redirect('/'); //Inside a callback… bulletproof!
//   })
// });



// router.get('/logout', function (req, res, next) {

//   if (error) {
//     return res.status(500).json({
//       message: error || 'Oops, something happened!',
//     });
//   }
//   console.log("Inside Logout");
//   req.logout(user, function (error) {
//     user.isAuthenticated = false;
//     res.redirect('/');
//     res.json({
//       isAuthenticated: false
//     });

//   })(req, res, next);

// });

module.exports = router;
