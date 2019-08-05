module.exports = function (passport) {
    var LocalStrategy = require('passport-local').Strategy;
    passport.use(new LocalStrategy({usernameField: 'login'},
        async function(username, password, done) {
            if (username != 'admin')
                return done(null, false, {message: 'Неверный логин'});

            if (password != 'admin')
                return done(null, false, {message: 'Неверный пароль'});
            let dbUser = await users.getUser(-1, admin);
            done(null, dbUser);
            //return done(null, {username: 'admin', id:13});
        }
    ));

}
