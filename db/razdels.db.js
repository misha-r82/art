module.exports = Db;
'use strict';
function Db()
{

    var connection = require('../db/db.js').connection;
    return {
        getRazdels:  function(countArticles)
        {
            return new Promise(function(resolve, reject) {
                var sql = countArticles == false || countArticles == undefined ?
                    `SELECT id, razdel FROM  razdels;` :
                    `select razdel_id, razdel , count(articles.id) as artCount 
                    from articles join razdels on articles.razdel_id = razdels.id 
                    group by razdel_id`;
                connection.query(sql, function (err, data) {resolve(data);});
            })
        },

    };
}

