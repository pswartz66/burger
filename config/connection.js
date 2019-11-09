
const mysql = require("mysql");


const connection = mysql.connection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
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


