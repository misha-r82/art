var db = require('../db/articles.db.js')();


module.exports = function()
{
    function readComment(row)
    {
        var obj =
            {
                commentId: row.id,
                author: row.author,
                text: row.text,
                created: row.created,
            }
        return obj;
    }
    function getArticleComments(article, callback)
    {
        return new Promise(async function(resolve, reject) {
            var data = await db.getCommentsList( article.id);
            var comments = new Array();
            for (i = 0; i<data.length; i++)
                comments.push(readComment(data[i]));
            resolve(comments);
        });

    }
    return {
        // добавляет к статье массив комментариев
    getArticleComments: getArticleComments,
    newComment: function(article, text ,callback)
    {
        db.addComment(article.id, 'user', text, function (err, data) {
           callback(err, data);
        });
    }

    };
};