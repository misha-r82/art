var express = require('express');
var router = express.Router();
var comments = require('../controllers/comments.js')();
var db = require('../db/articles.db.js')();
var hbs = require('hbs');
module.exports = router;
'use strict';
router.post( '/add/', async function(req, res)
{
    let comment = await comments.newComment(req.body.articleId, req.body.commentText);
    res.send(comment);
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
