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


        getArticle: function( id)
        {
            return new Promise((resolve, reject) => {
                var sql = `SELECT id, razdel_id, title, text, author, created, updated FROM articles WHERE id=${id};`;
                connection.query( sql, function(err, data) {
                    if (err) return reject(err);
                    if (data.length < 1) return reject("отстуствуют разделы!");
                    readArticle(data[0]);
                    resolve(data[0]);
                } );
            });

        },
        addArticle: function(article)
        {
            return new Promise((resolve, reject) => {
                var sql = `INSERT INTO articles (razdel_id, title, text, author) VALUES  
                ('${article.razdelId}','${article.title}','${article.text}',${article.author});`;
                connection.query( sql, resolve );
            })
        },

        updateArticle: function ( article )
        {
            return new Promise(function(resolve, reject) {
                var sql = `UPDATE articles SET razdel_id='${article.razdelId}', title = '${article.title}', text='${article.text}' WHERE id='${article.id}';`;
                connection.query(sql, resolve);
            });
        },
        deleteArticle: function ( id, callback )
        {
            return new Promise(function(resolve, reject) {
                var sql = "DELETE FROM comments " + " WHERE to_article='" + id + "';";
                connection.query(sql, function (err, data) {
                    var sql = "DELETE FROM articles " + " WHERE id='" + id + "';";
                    connection.query(err, resolve);
                });
            });
        },
        getArticlesList: function(razdelId, callback )
        {
            return new Promise(function(resolve, reject) {
                var sql = (razdelId > -1) ?
                    `SELECT id, title, author, created, updated FROM articles WHERE razdel_id = ${razdelId} ORDER BY created DESC;`:
                    "SELECT id, title, author, created, updated FROM articles ORDER BY created DESC;"
                connection.query( sql, function (err, data){
                    if(err) return reject(err);
                    for(i=0; i<data.length; i++)
                        data[i] = readArticle(data[i]);
                    resolve(data);
                } );
            });

        },
        addComment: function( id, author, text)
        {
            return new Promise(function(resolve, reject) {
                var sql = "INSERT INTO comments (to_article, text, author) VALUES ('" + id + "','" + text + "','" + author + "');";
                connection.query(sql, (err, data) => {
                    var comment = {
                        "commentId": data.insertId,
                        "author": author,
                        "text": text,
                    }
                    if (err) reject(err);
                    resolve(comment);
                });
            });
        },
        deleteComment: function (id, callback) {
            return new Promise(function (resolve, reject) {
                var sql = `DELETE FROM comments WHERE id='${id}';`;
                connection.query(sql, (err, data) => {
                    if (err) reject(err);
                    resolve(data)
                });
            });
        },
        updateComment: function( comment )
        {
            return new Promise(function(resolve, reject) {
                var sql = `UPDATE comments SET text = '${comment.text}' WHERE id='${comment.id}'`;
                connection.query( sql, function (err) {
                    if (err) return err;
                    sql = `SELECT text FROM comments WHERE id ='${comment.id}'`;
                    connection.query( sql, function (err, data) {
                        if (err) reject(err);
                        resolve(data[0]['text']);
                    })
                } );
            })
        },


        getCommentsList: (id) =>
        {
            return new Promise(function(resolve, reject) {
                var sql = "SELECT * FROM comments WHERE to_article='"+id+"' ORDER BY created DESC;";
                connection.query( sql, (err, data) =>
                {
                    if (err) reject(err);
                    resolve(data);
                });
            });
        }
    };
}

