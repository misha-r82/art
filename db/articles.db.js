module.exports = Db;
'use strict';
function Db()
{
    var FIELDS = '';
    var connection = require('../db/db.js').connection;
    return {


        getArticle: function( id, callback )
        {
            var sql = `SELECT id, razdel_id, title, text FROM articles WHERE id=${id};`;
            connection.query( sql, callback );
        },
        addArticle: function( article, callback )
        {
            var sql = `INSERT INTO articles (razdel_id, title, text, author) VALUES  
                ('${article.razdelId}','${article.title}',''${article.text}','${article.author}');`;
            connection.query( sql, callback );
        },

        updateArticle: function ( article, callback )
        {
            var sql = `UPDATE articles SET razdel_id='${article.razdelId}', title = '${article.title}', text='${article.text}' WHERE id='${article.id}';`;
            connection.query( sql, callback );
        },
        deleteArticle: function ( id, callback )
        {
            var sql = "DELETE FROM comments " + " WHERE to_article='"+id+"';";
            connection.query( sql, callback );
            var sql = "DELETE FROM articles " + " WHERE id='"+id+"';";
            connection.query( sql, callback );
        },
        getArticlesList: function( callback )
        {
            var sql = "SELECT id, title, author, created, updated FROM articles ORDER BY created DESC;";
            connection.query( sql, callback );
        },
        addComment: function( id, author, text, callback )
        {
            var sql = "INSERT INTO comments (to_article, text, author) VALUES ('"+id+"','"+text+"','"+author+"');";
            connection.query( sql, callback );
        },
        deleteComment: function ( id)
        {
            var sql = `DELETE FROM comments WHERE id='${id}';`;
            connection.query( sql);
        },
        updateComment: function ( comment, callback )
        {
            var sql = `UPDATE comments SET text = '${comment.text}' WHERE id='${comment.id}';`;
            connection.query( sql, callback );
        },


        getCommentsList: function( id, callback )
        {
            var sql = "SELECT * FROM comments WHERE to_article='"+id+"' ORDER BY created DESC;";
            connection.query( sql, callback );
        }
    };
}

