const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../users/userModel');
const InstagramStrategy = require('passport-instagram').Strategy;
//
const jwt = require('jsonwebtoken');
//

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
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(function () {
      //console.log("This is the user", req.account);
      console.log("token is", accessToken);
      console.log("refreshtoken is", refreshToken);
      //console.log("profile is", profile);

      User.where({ instagram_id: profile.id })
      .fetch().then((user) => {
        if (user) {
          console.log('found a instagrammer, returning the user');
          //console.log('found user', user)
          // const token = jwt.sign(user, process.env.SECRET, { expiresIn: 10080 });
          // console.log('about to send JSON!!')
          // res.json({ success: true, token: `JWT ${token}`, id: createdUser.get('id') });
          return done(null, user);
        } else {
          console.log('going to create an instagrammer');

          const newUser = new User({
            username: profile.displayName,
            instagram_id: profile.id,
            bio: profile.bio,
            instagram_profile_pic: profile._json.data.profile_picture,
            instagram_username: profile.username,
          });
          newUser.save()
          .then((createdUser) => {
            // const token = jwt.sign(user, process.env.SECRET, { expiresIn: 10080 });
            // console.log('about to send JSON!!')
            // res.json({ success: true, token: `JWT ${token}`, id: createdUser.get('id') });
            console.log('saved a user, returning, createdUser: ')
            return done(null, createdUser);
          })
          .catch((err) => {
            console.log('Error saving user in passport.js', err);
            res.status(500).send(err);
          });
        }
        // we just tried to either find or save an instagrammer
        // if that fails, do this?
        console.log('failed to find an instagrammer')
        return done(null, false);
      })
      .catch((err) => {
        return done(err, false);
      });
      
      // To keep the example simple, the user's Instagram profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Instagram account with a user record in your database,
      // and return that user instead.
      console.log('ABOUT TO RETURN')
      return done(null, profile);
    });

    // User.findOrCreate({ instagramId: profile.id }, function (err, user) {
    //   return done(err, user);
    //});
  }));
};

