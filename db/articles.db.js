module.exports = Db;
'use strict';
function Db()
{
    var FIELDS = '';
    var connection = require('../db/db.js').connection;
    function readArticle(row)
    {
        var obj =
            {
                id: row.id,
                razdelId : row.razdel_id,
                title: row.title,
                text: row.text,
                created: row.created,
                updated: row.updated
            }
        return obj;
    }


    return {


        getArticle: function( id, callback )
        {
            var sql = `SELECT id, razdel_id, title, text, author, created, updated FROM articles WHERE id=${id};`;
            connection.query( sql, function(err, data) {
                if (err) return callback(err, null);
                if (data.length < 1) return callback(null, null);
                readArticle(data[0]);
                callback(null, data[0]);
            } );
        },
        addArticle: function( article, callback )
        {
            var sql = `INSERT INTO articles (razdel_id, title, text, author) VALUES  
                ('${article.razdelId}','${article.title}','${article.text}',${article.author});`;
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
            connection.query( sql, function (err, data) {
                var sql = "DELETE FROM articles " + " WHERE id='"+id+"';";
                connection.query(err, callback );
            } );

        },
        getArticlesList: function(razdelId, callback )
        {
            var sql = (razdelId > -1) ?
                `SELECT id, title, author, created, updated FROM articles WHERE razdel_id = ${razdelId} ORDER BY created DESC;`:
                "SELECT id, title, author, created, updated FROM articles ORDER BY created DESC;"
            connection.query( sql, function (err, data){
                if(err) return callback(err, null);
                for(i=0; i<data.length; i++)
                   data[i] = readArticle(data[i]);
                callback(null, data);
            } );
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
            var sql = `UPDATE comments SET text = '${comment.text}' WHERE id='${comment.id}'`;
            connection.query( sql, function (err) {
                if (err) return err;
                sql = `SELECT text FROM comments WHERE id ='${comment.id}'`;
                connection.query( sql, function (err, data) {
                callback(err, data[0]['text']);
                })
            } );
        },


        getCommentsList: function( id, callback )
        {
            var sql = "SELECT * FROM comments WHERE to_article='"+id+"' ORDER BY created DESC;";
            connection.query( sql, callback );
        }
    };
}

