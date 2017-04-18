exports.setup = function (User, config) {
  var passport = require('passport');
  var PinterestStrategy = require('passport-pinterest').Strategy;

  passport.use(new PinterestStrategy({
    clientID: '4889556441601421700',//config.pinterest.clientID,
    clientSecret: '10aa90df74073e648cd8c5276baa1ef9f45ad707edac56f559f97ed671add878',  //config.pinterest.clientSecret,
    scope: ['read_public', 'read_relationships','read_relationships'],
    callbackURL: "https://localhost:3000/auth/pinterest/callback",   //config.pinterest.callbackURL
    state: true
  },
  function(accessToken, refreshToken, profile, done) {
   User.findOne({ 
    "pinterest.data.id": profile.id 
  },  function (err, user) {

    console.log("access token "+refreshToken);
    if (err) {
      return done(err, user);
     
    }
    if (!user) {
      console.log("f name"+profile._json.data.first_name);
      user = new User({
        name: profile.displayName,
        //username: profile.username,
        role: 'user',
        provider: 'pinterest',
        pinterest: profile._json
      });
      
      user.save(function(err) {
        if (err) return done(err);
        return done(err, user);
      });
    }
     else {
      console.log("profile dn "+profile.displayName);
      console.log("profile un "+profile.username);
     // console.log("profile fname "+user.pinterest.data.first_name);
      return done(err, user);
    }

  });
 }
 ));
};