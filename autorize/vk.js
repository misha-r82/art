module.exports = function (passport) {
    const VKStrategy = require('passport-vk-strategy').Strategy;
    passport.use(new VKStrategy(
        {
            clientID:     6777129,
            clientSecret: 'F5kBtnCQTYFTOlEoPUv1',
            callbackURL:  "http://localhost:3000/auth/vk/callback"
        },
        function VerifyCallback(accessToken, refreshToken, params, profile, done) {
            return done(null, {
                sotialId:profile.id,
                username: profile.displayName,
                photoURL: profile.photos[0].value,
            });
        }
    ));

}