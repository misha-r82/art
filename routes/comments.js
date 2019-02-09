var express = require('express');
var router = express.Router();
var comments = require('../controllers/comments.js')();
var db = require('../db/articles.db.js')();
var hbs = require('hbs');
module.exports = router;
'use strict';
router.post( '/add/', function(req, res)
{
    var article = { id : req.body.id};
    var text = req.body.text;
    comments.newComment(article, text, function ( err, data) {
        data.layout = false;
        res.render('partials/comment', data, function (err, html) {
            var result = {sucess: true, html: html};
            res.send(JSON.stringify(result));
        }); });

});
router.post('/delete/', function (req,res)
{
    db.deleteComment(req.body.commentId, function (err, data)
    {
        var result = {"sucess" : data.affectedRows == 1};
        res.send(JSON.stringify(result));
    })
});
router.post('/edit/', function (req,res)
{
    var comment = { id:req.body.id, text:req.body.text};
    db.updateComment(comment, function (err, data)
        {
            res.send(data);
        });
});
module.exports = router;
