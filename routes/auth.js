var express = require('express')
    , router = express.Router()
    , FacebookStrategy = require('passport-facebook').Strategy
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
    , TwitterStrategy = require('passport-twitter').Strategy
    , passport = require('passport')
    , config = require('../config/config')

//router.post('/session-save', function(req, res) {
//    console.log('>>>>>>>>>', req.body)
//    res.send(200)
//})

router.get('/', function(req, res) {
    res.render('login', { title: 'Express' });
});

router.get('/facebook', function (req, res, next) {
    passport.authenticate('facebook')(req, res, next)
    });

router.get('/facebook/callback',function (req, res, next) {
    passport.authenticate('facebook', { successRedirect: '/allOK',
            failureRedirect: '/auth'}
    )(req, res, next)
});

//router.get('/google', function (req, res, next) {
//    passport.authenticate('google')(req, res, next)
//});
//
//router.get('/google/callback',
//    passport.authenticate('google', { failureRedirect: '/auth' }),
//    function(req, res) {
//        // Successful authentication, redirect home.
//        res.redirect('/allOK');
//    });
//
//router.get('/google', function (req, res, next) {
//        passport.authenticate('google')(req, res, next)
//    });
router.get('/google',
    passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

router.get('/google/callback',function (req, res, next) {
        passport.authenticate('google', { successRedirect: '/allOK',
                failureRedirect: '/auth'}
    )(req, res, next)
});


router.get('/twitter',
    passport.authenticate('twitter'));

router.get('/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/auth' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/allOK');
    });


//router.get('/twitter/callback', passport.authenticate('twitter', { successRedirect: '/allOK',failureRedirect: '/auth'}));


router.get('/logout', function(req, res){
        req.session.passport = {}
        res.redirect('/');

    });


    passport.use(new FacebookStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL,
            scope: 'email' //, user_birthday'
//            passReqToCallback: true
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile)
        }
    ));

passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new TwitterStrategy({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, done) {
        done(null, profile)
    }
));

    passport.serializeUser(function (user, done) {
//        console.log('-----serializeUser>>>>>>>>>', user)
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
//        console.log('------deserializeUser>>>>>>>>>', user)
        done(null, user);
    });

module.exports = router;