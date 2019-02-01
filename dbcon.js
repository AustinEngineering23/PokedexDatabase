var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_sturtzj',
  password        : 'JJemailJJ1226?',
  database        : 'cs290_sturtzj'
});

module.exports.pool = pool;
