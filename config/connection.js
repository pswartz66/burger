
var mysql = require("mysql");

require('dotenv').config();
let myKeys = require("../keys.js");

var connection;

/* const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: myKeys.ID.SECRET_ID,
    database: "burgers_db"
}); */


// hook to JawsDB if on hosted on heroku
if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

    // Make standard local database connection

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: myKeys.ID.SECRET_ID,
        database: "burgers_db"
    });



}


connection.connect(function (err) {

        if (err) {
            console.log("error connecting: " + err.stack);
            return;
        }

        console.log("connected as id " + connection.threadId);

    });




module.exports = connection;



