var db = require('../db/articles.db.js')();


module.exports = function()
{
    function readComment(row)
    {
        if (row == undefined) return null;
        var obj =
            {
                commentId: row.id,
                toArticle: row.to_article,
                author: row.author,
                text: row.text,
                created: row.created,
            }
        return obj;
    }
    function getArticleComments(articleId)
    {
        return new Promise(async function(resolve, reject) {
            var data = await db.getCommentsList(articleId);
            var comments = new Array();
            for (i = 0; i<data.length; i++)
                comments.push(readComment(data[i]));
            resolve(comments);
        });
    }
    async function newComent(articleId, text) {
        var commentId = await db.addComment(articleId, 'user', text);
        var data = await db.getComment(commentId);
        var comment = readComment(data[0]);
        return comment;
    };

    return {
        // добавляет к статье массив комментариев
    getArticleComments: getArticleComments,
    newComment: newComent
    }

};
