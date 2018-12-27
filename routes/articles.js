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
        var articles = new Array();
        for (i = 0; i < data.length; i++)
            articles.push(
                {
                    id: data[i].id,
                    title: data[i].title,
                })
        res.render('articles', {articles: articles, message: req.flash('msg')});
    });
})
router.get( '/:id', function(req, res)
{
    db.getArticle( req.params.id, function( err, data )
    {
    if(err) return;
    var article = readArticle(data[0]);
    comments.getArticleComments(article, function () {
        res.render('article_view', article);
    })
    });
});
function readArticle(row)
{
    obj =
        {
            id: row.id,
            razdelId : row.razdel_id,
            title: row.title,
            text: row.text,
        }
     return obj;
}
module.exports = router;
