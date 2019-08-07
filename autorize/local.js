module.exports = function (passport) {
    var LocalStrategy = require('passport-local').Strategy;
    passport.use(new LocalStrategy({usernameField: 'login'},
         function(username, password, done) {
            if (username != 'admin')
                return done(null, false, {message: 'Неверный логин'});

            if (password != 'admin')
                return done(null, false, {message: 'Неверный пароль'});
            return done(null, {"userName":"admin", "isAdmin":true});
            //return done(null, {username: 'admin', id:13});
        }
    ));

}
