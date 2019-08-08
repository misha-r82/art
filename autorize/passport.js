
module.exports = function (app)
{
    var passport = require('passport');

    require('../autorize/vk.js')(passport);
    require('../autorize/local.js')(passport);
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function(user, done) {
        done(null, JSON.stringify(user));
    });

    passport.deserializeUser(function(id, done) {
        done(null, JSON.parse(id));
    });

return passport;
}



