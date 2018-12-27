
module.exports = function (app)
{
    var passport = require('passport');

    require('../autorize/vk.js')(passport);
    require('../autorize/local.js')(passport);

    passport.serializeUser(function(user, done) {
        console.log("serialize " + user);
        done(null, JSON.stringify(user));
    });

    passport.deserializeUser(function(id, done) {
        console.log("deserialize " + id);
        done(null, JSON.parse(id));
    });
    app.use(passport.initialize());
    app.use(passport.session());
return passport;
}



