// expose our config directly to our application using module.exports
module.exports = {
    development: {
        'facebookAuth' : {
            'clientID' 		: '755839674472722', // your App ID
            'clientSecret' 	: '7f468a1b168dae9ee71ff1553ffca647', // your App Secret
            'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
        }
    },
    staging: {
        'facebookAuth' : {
            'clientID': '348246538658784', // your App ID
            'clientSecret': '082e7b116f91a3766b4fa78903329595', // your App Secret
            'callbackURL': 'http://passport-test-rsc.herokuapp.com/auth/facebook/callback'
        }
    },
    qa: {
        'facebookAuth' : {
            'clientID': '931104163573504', // your App ID
            'clientSecret': 'edd4ea595099a691670bfe73c610ec15', // your App Secret
            'callbackURL': 'http://oakatpqa.bamnetworks.com/auth/facebook/callback'
        }
    }
};