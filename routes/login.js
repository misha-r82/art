module.exports = function(app)
{
    var express = require("express");
    var router = express.Router();
    var passport = require('../autorize/passport')(app);
    app.get('/auth/vk',
       passport.authenticate('vkontakte', {
            scope: ['email']
        }), (req, res) => {});
    app.get('/auth/vk/callback',

        passport.authenticate('vkontakte', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            res.redirect('http://localhost:4200/articles/');
        });
    router.get('/logout/', (req, res)=>
    {
        req.logout();
        res.send({"status":"ok"});
    })
    router.get('/', async function(req, res, next)
    {
        res.render('login');
    })
        router.get('/getUser', function (req, res) {
            if(req.user == undefined) res.send({});
            else res.send({ "userName": req.user.userName, "isAdmin": req.user.isAdmin});

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
        })
    return router;
}


