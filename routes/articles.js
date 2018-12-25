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
router.route('/add')
    .get(function(req, res)
    {
        console.log(req.isAuthenticated());
        if (!req.isAuthenticated())
        {
            res.redirect("/login");
            return;
        }
        var result = {article : {id : -1, title: "", text : "", author:req.user.id }};
        dbRazdel.getRazdels().then(
            r => {
                readRazdels(r, 1);
                result.razdelList = r;
                res.render('article_edit', result);
            },
            null);
    })
    .post(function (req, res)
    {
        var article = readArticleFromBody(req.body);
        db.addArticle(article, 0,
            function () {
                req.flash('msg', 'статья успешно создана!');
                res.redirect("/articles")
            }
            )
    });
router.route('/edit/:id')
    .get(function (req, res)
    {
        db.getArticle( req.params.id, function( err, data )
        {
            if(err) return;
            var result = {article : readArticle(data[0])};
            dbRazdel.getRazdels().then(
                r => {
                    readRazdels(r, r.article.id);
                    result.razdelList = r;
                    res.render('article_edit', result);
                },
                null);
        });
    })
    .post( function(req,res)
    {
        var article = readArticleFromBody(req.body);
        db.updateArticle(article, function (err, data)
        {
            req.flash('msg', 'статья успешно отредактирована!');
            res.redirect("/articles")
        });

    });
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
router.get( '/delete/:id', function(req, res)
{
    db.deleteArticle(req.params.id);
    req.flash('msg', 'статья удалена!');
    res.redirect('/articles');
});
function readRazdels(data, articleId)
{
    for(i = 0; i<data.length; i++)
        data[i] = {
            razdelId:data[i].id,
            razdel:data[i].razdel,
            selected:data[i].id === articleId
        }
}
function readArticleFromBody(body)
{
    obj =
    {
        id:body.articleId,
        razdelId:body.razdelList,
        title:body.title,
        text:body.editInput
    }
    return obj;
}
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
