const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const InstagramStrategy = require('passport-instagram').Strategy;
const User = require('../users/userModel').User;

// JWT strategy for regular sign up/in
module.exports = (passport) => {
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: process.env.SECRET,
  },
  (jwtPayload, done) => {
    User.where({ id: jwtPayload.id })
    .fetch().then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => {
      console.error('JWT Strategy: ', err);
      return done(err, false);
    });
  }));

  // Instagram authentication
  passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL || 'http://localhost:8080/auth/instagram/callback',
    scope: 'public_content',
  },
  (accessToken, refreshToken, profile, done, res, req, next) => {
    process.nextTick(() => {
      // Try to find user in database and pass along
      User.where({ instagram_id: profile.id })
      .fetch()
      .then((user) => {
        if (user) {
          user.save({
            instagram_token: accessToken || refreshToken.access_token,
          })
          .then((model) => {
            return done(null, model);
          })
          .catch((err) => {
            console.error('Instagram Strategy: ', err);
            return done(err, false);
          })
        } else {
          // If not found in database create and store new instagram user
          const newUser = new User({
            username: profile.displayName,
            instagram_token: accessToken || refreshToken.access_token,
            instagram_id: profile.id,
            instagram_profile_pic: profile._json.data.profile_picture,
            instagram_username: profile.username,
            password: 'insta',
          });
          newUser.save()
          .then((createdUser) => {
            return done(null, createdUser);
          })
          .catch((err) => {
            console.error('Instagram Strategy: ', err);
            return done(err, false);
          });
        }
      })
      .catch((err) => {
        console.error('Instagram Strategy: ', err);
        return done(err, false);
      });
    });
  }));
};
