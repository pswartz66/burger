
// Import MySQL connection
const connection = require("../config/connection.js");


let orm = {

    all: function (tableInput, cb) {

        let query = "SELECT * FROM burgers_db." + tableInput + ";";

        connection.query(query, function (err, result) {

            if (err) { throw err };

            cb(result);

        })

    },

    create: function (table, cols, vals, cb) {

        let query = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?, false)";

        connection.query(query, vals, function (err, result) {

            if (err) { throw err };

            cb(result);

        })

    },

    update: function (table, colOne, condition, cb) {

        let query = "UPDATE " + table + " SET " + "devoured = '" + colOne + "'"+
            " WHERE id = " + condition + ";";

        connection.query(query, function (err, result) {

            if (err) { throw err };

            cb(result);

        });

    }



};


module.exports = orm;