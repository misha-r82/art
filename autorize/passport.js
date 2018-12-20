
module.exports = function (app)
{
    var passport = require('passport');
    app.use(passport.initialize());
    app.use(passport.session());
    require('../autorize/vk.js')(passport);
    require('../autorize/local.js')(passport);

    passport.serializeUser(function(user, done) {
        console.log("serialize " + user);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log("deserialize " + id);
        done(null, {username: id});
    });
return passport;
}



