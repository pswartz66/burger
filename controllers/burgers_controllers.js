
const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require('../models/burger.js');

// Create all routes
router.get("/", function (req, res) {

    // console.log('get controller route');

    burger.all(function (data) {

        let bObject = {
            burgers: data
        }

        // log the burger object to the terminal as a check
        console.log(bObject);

        // render the burger object to the index.handlebars file
        res.render("index", bObject);

    })

});


router.post("/api/burgers", function (req, res) {

    burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function (result) {

        res.json(({ id: result.insertId }))

    });

    console.log('posted the burger to SQL database');

});


router.put("/api/burgers/:id", function (req, res) {

    let condition = req.params.id;

    burger.update({

        devoured: true

    }, condition, function (result) {

        if (result.changedRows == 0) {

            return res.status(404).end();

        } else {

            res.status(202).end();

        }

    });

});

router.delete("/api/burgers/:id", function (req, res) {

    let condition = req.params.id;
    console.log(condition);

    burger.delete(condition, function (result) {

        if (result.affectedRows == 0) {

            return res.status(404).end();

        } else {

            res.status(202).end();
        }

    });

});



// Export routes for the server.js file to use
module.exports = router;