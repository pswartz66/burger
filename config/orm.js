
// Import MySQL connection
const connection = require("../config/connection.js");


let orm = {

    all: function(tableInput, cb) {

        let query = "SELECT * FROM burgers_db." + tableInput + ";";

        connection.query(query, function(err, result) {

            if (err) { throw err };

            cb(result);

        })

    }

}


module.exports = orm;