var express = require('express');
var router = express.Router();
var comments = require('../controllers/comments.js')();
var db = require('../db/articles.db.js')();
module.exports = router;

router.post( '/add/', function(req, res)
{
    var article = { id : req.body.id};
    var text = req.body.text;
    comments.newComment(article, text, function () {
        res.render('partials/comments', {layout : 'empty', article : article}); });

});
router.post('/delete/', function (req,res)
{
    db.deleteComment(req.body.commentId, function ()
    {
        res.render('partials/comments', {layout : 'empty', article : article});
    })
});
router.post('/edit/', function (req,res)
{
    var comment = { id:req.body.id, text:req.body.text};
    db.updateComment(comment, function (req, res)
        {

        });

});
module.exports = router;
