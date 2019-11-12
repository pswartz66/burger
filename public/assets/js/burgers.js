


$("#add-btn").on("click", function(){

    event.preventDefault();

    let userBurger = {

        name: $("#add-burger").val().trim(),
        devoured: false

    }

    $.ajax("api/burgers", {
        type: "POST",
        data: userBurger


    }).then(function(){

        console.log(userBurger);

        console.log("clicked the submit button");

        location.reload();

        
    })

    
    
    


})