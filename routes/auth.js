var express = require('express')
    , router = express.Router()
    , FacebookStrategy = require('passport-facebook').Strategy
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
    , TwitterStrategy = require('passport-twitter').Strategy
    , passport = require('passport')
    , config = require('../config/config')
    , nodemailer = require("nodemailer")

    , smtpTransport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: 'translate2222@gmail.com',
            pass: 'web2222inter'
        }
    })
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

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/auth' }),
    function(req, res) {
        var mailOptions = {
            from: 'translate2222@gmail.com', // sender address
            to: 'translate2222@gmail.com', // list of receivers
            subject: '/facebook/callback success', // Subject line
            text: 'FacebookStrategy success' // plaintext body
        };

        smtpTransport.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('mail FacebookStrategy success error: ', error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
        // Successful authentication, redirect home.
        res.redirect('/allOK');
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

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth' }),
    function(req, res) {
        var mailOptions = {
            from: 'translate2222@gmail.com', // sender address
            to: 'translate2222@gmail.com', // list of receivers
            subject: '/google/callback success', // Subject line
            text: 'GoogleStrategy success' // plaintext body
        };

        smtpTransport.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('mail GoogleStrategy success error: ', error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
        // Successful authentication, redirect home.
        res.redirect('/allOK');
    });


router.get('/twitter',
    passport.authenticate('twitter'));

router.get('/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/auth' }),
    function(req, res) {
        var mailOptions = {
            from: 'translate2222@gmail.com', // sender address
            to: 'translate2222@gmail.com', // list of receivers
            subject: '/twitter/callback success', // Subject line
            text: 'TwitterStrategy success' // plaintext body
        };

        smtpTransport.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('mail TwitterStrategy success error: ', error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
        // Successful authentication, redirect home.
        res.redirect('/allOK');
    });


//router.get('/twitter/callback', passport.authenticate('twitter', { successRedirect: '/allOK',failureRedirect: '/auth'}));


router.get('/logout', function(req, res){
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'translate2222@gmail.com', // sender address
        to: 'translate2222@gmail.com', // list of receivers
        subject: 'logout', // Subject line
        text: 'user ' + req.user + ' logout' // plaintext body
    };

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('mail logout error: ', error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
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
            var mailOptions = {
                from: 'translate2222@gmail.com', // sender address
                to: 'translate2222@gmail.com', // list of receivers
                subject: 'FacebookStrategy', // Subject line
                text: 'FacebookStrategy done: ' + profile // plaintext body
            };

// send mail with defined transport object
            smtpTransport.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log('mail FacebookStrategy done: ', error);
                }else{
                    console.log('Message sent: ' + info.response);
                }
            });
            done(null, profile)
        }
    ));

passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        var mailOptions = {
            from: 'translate2222@gmail.com', // sender address
            to: 'translate2222@gmail.com', // list of receivers
            subject: 'GoogleStrategy', // Subject line
            text: 'GoogleStrategy done: ' + profile // plaintext body
        };

// send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('mail GoogleStrategy done: ', error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
        done(null, profile)
    }
));

passport.use(new TwitterStrategy({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, done) {
        var mailOptions = {
            from: 'translate2222@gmail.com', // sender address
            to: 'translate2222@gmail.com', // list of receivers
            subject: 'TwitterStrategy', // Subject line
            text: 'TwitterStrategy done: ' + profile // plaintext body
        };

// send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('mail TwitterStrategy done: ', error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
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