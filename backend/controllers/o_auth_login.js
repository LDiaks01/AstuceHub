const GoogleStrategy = require('passport-google-oauth20').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;
const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const passport = require('passport');

passport.use(
    new GoogleStrategy(
      {
        clientID: "275434420653-9epp6flsv4blfms752q6rd9lp09ndrbh.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: 'http://localhost:3000/auth/google/callback'
      },
      (accessToken, refreshToken, profile, cb) => {
        // Vérifiez l'utilisateur en utilisant le profil Google et exécutez le callback
        console.log("auth reussie via google");
        Users.findOrCreate({
            where: { email: profile.emails[0].value },
            defaults: {
              nom: profile.name.familyName,
              prenom : profile.name.givenName,
              email: profile.emails[0].value,
              pseudo : profile.emails[0].value,  // le pseudo est également l'email
              isAdmin : 0,
              imageUrl: profile.photos[0].value,
              googleId : profile.id
            }
          })
          .then(([user, created]) => {
            return cb(null, user);
          })
          .catch((err) => {
            console.error(err);
            return cb(null,false);
          })

        
      }
    )
  );
  


  passport.use(new DiscordStrategy({
    clientID: "1057288807151575111",
    clientSecret: "dsiGvWrmYzlkRDXwEPyiGHOA0oqZ8r-a",
    callbackURL: 'http://localhost:3000/auth/discord/callback',
    scope: ['identify']
  }, (accessToken, refreshToken, profile, cb) => {
    // Vérifiez l'utilisateur en utilisant le profil Discord et exécutez le callback
    const avatarUrl = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`;
    Users.findOrCreate({
      where: { email: profile.email },
      defaults: {
        nom: "null",
        prenom : "null",
        email: profile.email,
        pseudo : profile.username +"#"+profile.discriminator,  // le pseudo est également l'email
        imageUrl: avatarUrl,
        discordId : profile.id
      }
    })
    .then(([user, created]) => {
      return cb(null, user);
    })
    .catch((err) => {
      console.error(err);
      return cb(null,false);
    })

    
  }));
