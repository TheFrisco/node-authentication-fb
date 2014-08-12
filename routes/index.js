var express = require('express');
var router = express.Router()
, nodemailer = require("nodemailer")
, smtpTransport = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'translate2222@gmail.com',
        pass: 'web2222inter'
    }
})
/* GET home page. */
router.get('/', function(req, res) {
    var mailOptions = {
        from: 'translate2222@gmail.com', // sender address
        to: 'translate2222@gmail.com', // list of receivers
        subject: 'show index', // Subject line
        text: 'show index ' + req.user // plaintext body
    };

    smtpTransport.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('mail show index error: ', error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
  res.render('index', { title: 'Express' });
});

router.get('/allOK', function(req, res) {
    var mailOptions = {
        from: 'translate2222@gmail.com', // sender address
        to: 'translate2222@gmail.com', // list of receivers
        subject: 'show allOK', // Subject line
        text: 'show allOK ' + req.user // plaintext body
    };

    smtpTransport.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('mail show allOK error: ', error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
    res.render('allOK', { title: 'Express', user: req.user });
});

module.exports = router;
