var express = require('express');
var router = express.Router();
var db = require('../db/articles.db.js')();
var dbRazdel = require('../db/razdels.db.js')();
var comments = require('../controllers/comments.js')();
module.exports = router;
router.use(function(req, res, next){
    dbRazdel.getRazdels(true).then(
        (data)=>{res.razdelMenu = data;
        next();
        }, null
    )

});
router.get( '/razdel/:id', function(req, res)
{
    db.getArticlesList(req.params.id, function (err, data) {
        if (err) return;
        res.render('articles', {articles: data, message: req.flash('msg'),
            razdelMenu:res.razdelMenu});
    });
});
router.get( '/', function(req, res)
{
    db.getArticlesList(-1, function (err, data) {
        if (err) return;
        res.render('articles', {articles: data, message: req.flash('msg'),
        razdelMenu:res.razdelMenu});
    });
})
router.get( '/:id', function(req, res)
{
    db.getArticle( req.params.id, function( err, article )
    {
    if(err, article == undefined) return;
    comments.getArticleComments(article, function () {
        res.render('article_view', article);
    })
    });
});


router.get( '/delete/:id', function(req, res)
{
    db.deleteArticle(req.params.id);
    req.flash('msg', 'статья удалена!');
    res.redirect('/articles');
});

module.exports = router;
