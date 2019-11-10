
const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require('../models/burger.js');

// Create all routes
router.get("/", function(req, res){

    // console.log('get controller route');

    burger.all(function(data){

        let bObject = {
            burgers: data
        }

        // log the burger object to the terminal as a check
        console.log(bObject);

        // render the burger object to the index.handlebars file
        res.render("index", bObject);

    })

});


router.post("/api/burgers", function(req, res) {

    console.log('post controller route');

});


// Export routes for the server.js file to use
module.exports = router;