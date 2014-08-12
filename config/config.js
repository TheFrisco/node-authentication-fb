module.exports = {
    development: {
        facebook: {
//        clientID: '717333841648558'
//        , clientSecret: '1df771fab9faa227243cab878e2ddeb1'
            clientID: '1467155116884185'
            , clientSecret: '2332125e125f5beac4be2554f2447812'
            , callbackURL: "http://localhost:3000/auth/facebook/callback"
        }
        , google: {
            clientID: '342361308357-35ft1nf6vdj6u0ihs109b9g3jecdu2mi.apps.googleusercontent.com'
            , clientSecret: 'mmYCWxPf_729bTxJUKvXQRNX'
            , callbackURL: "http://localhost:3000/auth/google/callback"
        }
        , twitter: {
            consumerKey: 'l6IEeLtKsCSqSJvPl8ZEZnKB8'      //from translate2222@gmail.com
            , consumerSecret: 'g9HFPHueQJ0MSlSdW4DEFx0AszEhKvWOU6JluEr1w2udDeGw0r'     //from translate2222@gmail.com
            , callbackURL: "http://localhost:3000/auth/twitter/callback"
        }
        , remote_url: "http://localhost:3000"
        , url: "http://localhost:3000"
    }
    , staging: {
        facebook: {
//        clientID: '717333841648558'
//        , clientSecret: '1df771fab9faa227243cab878e2ddeb1'
            clientID: '1550592625164287'
            , clientSecret: '1da1087b1fb850f3c243e6e2aa28e0e6'
            , callbackURL: "http://passport-test-4-2-0.herokuapp.com/auth/facebook/callback"
        }
        , google: {
            clientID: '342361308357-35ft1nf6vdj6u0ihs109b9g3jecdu2mi.apps.googleusercontent.com'
            , clientSecret: 'mmYCWxPf_729bTxJUKvXQRNX'
            , callbackURL: "http://localhost:3000/auth/google/callback"
        }
        , twitter: {
            consumerKey: 'l6IEeLtKsCSqSJvPl8ZEZnKB8'      //from translate2222@gmail.com
            , consumerSecret: 'g9HFPHueQJ0MSlSdW4DEFx0AszEhKvWOU6JluEr1w2udDeGw0r'     //from translate2222@gmail.com
            , callbackURL: "http://localhost:3000/auth/twitter/callback"
        }
        , remote_url: "http://localhost:3000"
        , url: "http://localhost:3000"
    }
    , qa: {
        facebook: {
//            clientID: '471998796277609'     //from translate2222@gmail.com
//            , clientSecret: '38356d48019ac0e7f28ee90d1ffb67b0'     //from translate2222@gmail.com
            clientID: '1458158717776446'
            , clientSecret: '3cf0fd02056391a5c85996672bfd81f7'
            , callbackURL: "http://oakatpqa.bamnetworks.com/auth/facebook/callback"
        }
        , google: {
            clientID: '342361308357-8nq55tv3d3qdis3p6qhsti8dt634sjpi.apps.googleusercontent.com'     //from translate2222@gmail.com
            , clientSecret: 'HvuCSmu-qjyy8KkF8-3ID3zL'     //from translate2222@gmail.com
//            clientID: '1035862725548-38ca6ae6bhqftlh8g37omekipk1s69fh.apps.googleusercontent.com'
//            , clientSecret: 'CNCJmt9GYkknaLMU-y9wudy6'
            , callbackURL: "http://oakatpqa.bamnetworks.com/auth/google/callback"
        }
        , twitter: {
            consumerKey: 'reXfBXo0es2PR70DlexxeikTd'     //from translate2222@gmail.com
            , consumerSecret: 'ubVD89HWxYB5QQSZvyd68hoCIM1DNniDxF51vabcIYatiR5rOY'     //from translate2222@gmail.com
//            consumerKey: 'E970vJyXhe9KGpNYNkqqMlP3l'
//            , consumerSecret: 'B8TaPBhuYYfrutasjdvyng6kNJSHz4XTYUBLDYygWPXi1dqr0b'
            , callbackURL: "http://oakatpqa.bamnetworks.com/auth/twitter/callback"
        }
        , remote_url: "http://qa.venutopia.com"
        , url: "http://oakatpqa.bamnetworks.com"
   }
}