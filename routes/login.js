module.exports = function(app)
{
    var express = require("express");
    var router = express.Router();
    var passport = require('../autorize/passport')(app);
    /*app.get('*', function(req, res, next){
        res.setHeader('Last-Modified', (new Date()).toUTCString());
        next();
    });*/
    app.get('/auth/vk',
       passport.authenticate('vkontakte', {
            scope: ['email']
        }), (req, res) => {});
    app.get('/auth/vk/callback',

        passport.authenticate('vkontakte', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            res.redirect('http://localhost:4200/');
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
            if(req.user == undefined) res.send({"err":"user not found!"});
            else res.json({ "userName": req.user.userName, "isAdmin": req.user.isAdmin == true});

        })
    .post('/', function (req, res, next)
    {
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) {
                return res.send({"status":"err"});
            }
            req.login(user, err => {
                if(err) console.log(err);

                res.json({"status":"ok"});
            });
        })(req, res, next);
    })
    return router;
}


