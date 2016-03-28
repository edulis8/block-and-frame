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
    callbackURL: process.env.CALLBACK_URL || 'http://localhost:8080/auth/instagram/callback',
    scope: 'public_content',
  }, 
  (req, accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      console.log("This is the user", req.account);
      console.log("token is", accessToken);
      console.log("refreshtoken is", refreshToken);
      console.log("profile is", profile);

      User.where({ instagram_username: profile.username })
      .fetch()
      .then((user) => {
        if (!user) {
          return done(null, false);  
        } 
        if (user) {
          console.log('found a instagrammer, heres the user', user);
          console.log('about to save em')

          user.save({
            username: profile.displayName,
            instagram_token: accessToken || refreshToken.access_token,
            instagram_id: profile.id,
            //bio: profile.bio,
            instagram_profile_pic: profile._json.data.profile_picture,
            instagram_username: profile.username,
          });
          return done(null, user);
        }
        console.log('failed to find an instagrammer')
        return done(null, false);
      })
      .catch((err) => {
        return done(err, false);
      });
    });
  }));
};

// else {
//           console.log('going to create an instagrammer');

//           const newUser = new User({
//             username: profile.displayName,
//             instagram_token: accessToken,
//             instagram_id: profile.id,
//             bio: profile.bio,
//             instagram_profile_pic: profile._json.data.profile_picture,
//             instagram_username: profile.username,
//           });
//           newUser.save()
//           .then((createdUser) => {
//             // const token = jwt.sign(user, process.env.SECRET, { expiresIn: 10080 });
//             // console.log('about to send JSON!!')
//             // res.json({ success: true, token: `JWT ${token}`, id: createdUser.get('id') });
//             console.log('saved a user, returning, createdUser: ')
//             return done(null, createdUser);
//           })
//           .catch((err) => {
//             console.log('Error saving user in passport.js', err);
//             res.status(500).send(err);
//           });


