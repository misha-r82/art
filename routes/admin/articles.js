var express = require('express');
var router = express.Router();
var db = require('../../db/articles.db.js')();
var dbRazdel = require('../../db/razdels.db.js')();
var comments = require('../../controllers/comments.js')();
module.exports = router;
router.get( '/', async function(req, res)
{
    data = await db.getArticlesList();
    var articles = new Array();
    for (i = 0; i < data.length; i++)
        articles.push(
            {
                id: data[i].id,
                title: data[i].title,
            })
    res.render('admin/articles', {articles: articles, message: req.flash('msg')});

})
router.route('/add')
    .post(async function (req, res)
    {

        var article = req.body;

        try
        {
            if (article.id > 0) await db.updateArticle(article);
            else
            {
                article.author = req.user.id;
                await db.addArticle(article);
            }
        } catch (e) {
            res.json({"status":"err", "err":e});

        }
        res.json({"status" : "ok"});

    })
/*router.route('/add')
    .get(async function(req, res)
    {
        if (!req.isAuthenticated())
        {
            res.redirect("/login");
            return;
        }
        var result = {article : {id : -1, title: "", text : "" }};
        result.razdelList = await dbRazdel.getRazdels();
        res.render('admin/article_edit', result);
    })
    .post(async function (req, res)
    {
        var article = await readArticleFromBody(req.body);
        article.author = req.user.id;
        await db.addArticle(article);
        req.flash('msg', 'статья успешно создана!');
        res.redirect("/admin/articles");
    });*/
router.route('/edit/:id')
    .get(async (req, res) =>
    {
        var data = await db.getArticle( req.params.id);
        var result = {article : data};
        result.razdelList = await dbRazdel.getRazdels();
        res.render('admin/article_edit', result);
    })
    .post( async (req,res)=>
    {
        var article = await readArticleFromBody(req.body);
        await db.updateArticle(article);
        req.flash('msg', 'статья успешно отредактирована!');
        res.redirect("/articles")
    });
router.get( '/delete/:id', function(req, res)
{
    db.deleteArticle(req.params.id);
    req.flash('msg', 'статья удалена!');
    res.redirect('admin/articles');
});

function readArticleFromBody(body)
{
     obj = {
                id:body.articleId,
                razdelId:body.razdelList,
                title:body.title,
                text:body.editInput
            };
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
