
const mysql = require("mysql");

require('dotenv').config();
let myKeys = require("../keys.js");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: myKeys.ID.SECRET_ID,
    database: "burgers_db"
});



// Make connection
connection.connect(function(err) {

    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

module.exports = connection;



