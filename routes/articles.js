var express = require('express');
var router = express.Router();
var db = require('../db/articles.db.js')();
var dbRazdel = require('../db/razdels.db.js')();
var comments = require('../controllers/comments.js')();
module.exports = router;
router.use(async (req, res, next) =>
{
    data = await dbRazdel.getRazdels(true);
    res.razdelMenu = data;
    next();
}

);
router.get( '/razdels/', async (req, res) =>
{
    var data = await dbRazdel.getRazdels(true);
    res.json(data);
})
router.get('/byRazdel/:id', async (req, res) =>
{
    var data = await db.getArticlesList(req.params.id);
    res.json(data);
})
router.get('/byId/:id', async (req, res) =>
{
    var art = await db.getArticle(req.params.id);
    art.comments = await comments.getArticleComments(art.id);
    res.json(art);
})
router.get( '/razdel/:id', async (req, res) =>
{
    var data = await db.getArticlesList(req.params.id);
    res.render('articles', {articles: data, message: req.flash('msg'),
        razdelMenu:res.razdelMenu});
})
router.get( '/', async (req, res) =>
{
    var data = await db.getArticlesList(-1)
    res.render('articles', {articles: data, message: req.flash('msg'),
    razdelMenu:res.razdelMenu});
})
router.get( '/:id', async (req, res)=>
{
    var article = await db.getArticle( req.params.id);
    if(article == undefined) return;
    article.comments = await comments.getArticleComments(article.id);
    res.render('article_view', article);
});
router.get( '/delete/:id', (req, res) =>
{
    db.deleteArticle(req.params.id);
    req.flash('msg', 'статья удалена!');
    res.redirect('/articles');
});
module.exports = router;
