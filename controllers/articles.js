var db = require('../db/articles.db.js')();


module.exports = function()
{
    function readComment(row)
    {
        var obj =
            {
                title: row.id,
                author: row.author,
                text: row.text,
                created: row.created,
            }
        return obj;
    }
    function getArticleComments(article, callback)
    {
        db.getCommentsList( article.id, function( err, data )
        {
            if(err) return;
            article.comments = new Array();
            for (i = 0; i<data.length; i++)
                article.comments.push(readComment(data[i]));
            callback();
        });
    }
    return {
        // добавляет к статье массив комментариев
    getArticleComments: getArticleComments,
    newComment: function(article, text ,callback)
    {
        db.addComment(article.id, 'user', text, function () {
           if (err) return;
           getArticleComments(article, callback);
        });
    }

    };
};