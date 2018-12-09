module.exports = Db;
'use strict';
function Db()
{
    var mysql = require('mysql');
    if (Db.connection == undefined)
    {
        Db.connection = mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "",
                database: "node"
            }
        );

        Db.connection.connect( function(err) {
            if( err ) console.log( "DB connect error: "+err.message );
            else console.log( "Connected to DB" );
        });
    }
    return {

        addArticle: function( article, author, callback )
        {
            var sql = "INSERT INTO articles (title, text, author) VALUES ('"+article.title+"','"+article.text+"','"+author+"');";
            Db.connection.query( sql, callback );
        },

        updateArticle: function ( article, callback )
        {
            var sql = `UPDATE articles SET title = '${article.title}', text='${article.text}' WHERE id='${article.id}';`;
            Db.connection.query( sql, callback );
        },
        deleteArticle: function ( id, callback )
        {
            var sql = "DELETE FROM comments " + " WHERE to_article='"+id+"';";
            Db.connection.query( sql, callback );
            var sql = "DELETE FROM articles " + " WHERE id='"+id+"';";
            Db.connection.query( sql, callback );
        },
        addComment: function( id, author, text, callback )
        {
            var sql = "INSERT INTO comments (to_article, text, author) VALUES ('"+id+"','"+text+"','"+author+"');";
            Db.connection.query( sql, callback );
        },
        deleteComment: function ( id)
        {
            var sql = `DELETE FROM comments WHERE id='${id}';`;
            Db.connection.query( sql);
        },
        updateComment: function ( comment, callback )
        {
            var sql = `UPDATE comments SET text = '${comment.text}' WHERE id='${comment.id}';`;
            Db.connection.query( sql, callback );
        },
        getArticlesList: function( callback )
        {
            var sql = "SELECT id, title, author, created, updated FROM articles ORDER BY updated DESC;";
            Db.connection.query( sql, callback );
        },

        getArticle: function( id, callback )
        {
            var sql = "SELECT * FROM articles WHERE id="+id+";";
            Db.connection.query( sql, callback );
        },

        getCommentsList: function( id, callback )
        {
            var sql = "SELECT * FROM comments WHERE to_article='"+id+"' ORDER BY created DESC;";
            Db.connection.query( sql, callback );
        }
    };
}

