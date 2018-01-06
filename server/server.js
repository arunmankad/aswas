/*

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.sqlite3');
 


    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
       
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 15; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
       
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log("EEEEE")
            console.log(row.id + ": " + row.info);
        });
      });
       
      db.close();
*/

let sqlite = require('sqlite3');
let path = require('path');
let db = new sqlite.Database(path.join(__dirname, '../database.sqlite3'))

module.exports.getDB = function(sql){
    let my_sql = sql
    return new Promise(function(resolve, reject){
        db.serialize(function(){
            db.all(my_sql, function(err, rows){
                if(!err){
                    resolve(rows)
                }else{
                    reject(err)
                }
            })
        })
    })
    
}




console.log("HELLO0000000000 from server.js")