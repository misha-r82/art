var express = require('express');
var router = express.Router();
var comments = require('../controllers/comments.js')();
var db = require('../db/articles.db.js')();
var hbs = require('hbs');
module.exports = router;
'use strict';
router.get('*', function(req, res, next){
    if (req.user != undefinded)
        next();
    else res.json({"err" : "доступ запрещен"});
});
router.post( '/add/', async function(req, res)
{
    if (!req.user.isAdmin)  res.json({"err" : "доступ запрещен"});
    let comment = await comments.newComment(req.body.articleId, req.body.commentText);
    res.send(comment);
});

router.post('/delete/', async (req,res) =>
{
    if (!req.user.isAdmin)  res.json({"err" : "доступ запрещен"});
    var data = await db.deleteComment(req.body.commentId)
    var result = {"sucess" : data.affectedRows == 1};
    res.send(JSON.stringify(result));
});
router.post('/update/', async (req,res) =>
{
    if (!req.user.isAdmin)  res.json({"err" : "доступ запрещен"});
    var data = await comments.updateComment(req.body);
    res.send(data);
});
module.exports = router;
