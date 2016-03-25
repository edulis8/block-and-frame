const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../users/userModel');
const InstagramStrategy = require('passport-instagram').Strategy;

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: process.env.SECRET,
  };
  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    User.where({ id: jwtPayload.id })
      .fetch().then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => {
        return done(err, false);
      });
  }));

  passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/instagram/callback",
  },

  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log("This is the user", req.account);
      console.log("token is", accessToken);
      console.log("refreshtoken is", refreshToken);
      console.log("profile is", profile);
      
      // To keep the example simple, the user's Instagram profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Instagram account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });

    // User.findOrCreate({ instagramId: profile.id }, function (err, user) {
    //   return done(err, user);
    //});
  }));
};

