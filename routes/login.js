module.exports = function(app)
{
    var express = require("express");
    var router = express.Router();
    var passport = require('../autorize/passport')(app);
    app.get('/auth/vk',
        passport.authenticate('vkontakte', {
            scope: ['email']
        }),
        function (req, res) {
            // The request will be redirected to vk.com
            // for authentication, so
            // this function will not be called.
        });
    app.get('/auth/vk/callback',
        passport.authenticate('vkontakte', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            res.redirect('/');
        });

    router.get('/', async function(req, res, next)
    {
        res.render('login');
    })
    .post('/', function (req, res, next)
        {
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.send('Укажите правильный email и пароль!');
                }
                req.login(user, err => {
                    if(err) console.log(err);
                    res.redirect('/');
                });
            })(req, res, next);
        }
    );
    return router;
}

