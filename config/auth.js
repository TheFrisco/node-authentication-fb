// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    development: {
        'facebookAuth' : {
            'clientID' 		: '807455782623130', // your App ID
            'clientSecret' 	: '07b623a8ca695cfe590f5bbc9234a3bc', // your App Secret
            'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
        }
    },
    staging: {
        'facebookAuth' : {
            'clientID': '807455782623130', // your App ID
            'clientSecret': '07b623a8ca695cfe590f5bbc9234a3bc', // your App Secret
            'callbackURL': 'http://localhost:8080/auth/facebook/callback'
        }
    },
    qa: {
        'facebookAuth' : {
            'clientID': '807455782623130', // your App ID
            'clientSecret': '07b623a8ca695cfe590f5bbc9234a3bc', // your App Secret
            'callbackURL': 'http://localhost:8080/auth/facebook/callback'
        }
    }
};