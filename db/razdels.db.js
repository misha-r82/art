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
                    `SELECT id, razdel FROM  razdels;` : `SELECT id, razdel FROM  razdels;`;
                connection.query(sql, function (err, data) {resolve(data);});
            })
        },

    };
}

