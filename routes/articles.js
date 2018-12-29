var express = require('express');
var router = express.Router();
var db = require('../db/articles.db.js')();
var dbRazdel = require('../db/razdels.db.js')();
var comments = require('../controllers/comments.js')();
module.exports = router;
router.get( '/', function(req, res)
{
    db.getArticlesList(function (err, data) {
        if (err) return;
        res.render('articles', {articles: data, message: req.flash('msg')});
    });
})
router.get( '/:id', function(req, res)
{
    db.getArticle( req.params.id, function( err, article )
    {
    if(err) return;
    comments.getArticleComments(article, function () {
        res.render('article_view', article);
    })
    });
});

module.exports = router;
