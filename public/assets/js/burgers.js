


$("#add-btn").on("click", function () {

    event.preventDefault();

    let userBurger = {

        name: $("#add-burger").val().trim(),
        devoured: false

    }

    $.ajax("api/burgers", {
        type: "POST",
        data: userBurger


    }).then(function () {

        console.log(userBurger);

        console.log("clicked the submit button");

        location.reload();


    });


});


$("#delete-btns").on("click", function () {

    event.preventDefault();

    let id = $(this).data("id");

    $.ajax("/api/burgers/"+id, {
        type: "DELETE",

    }).then(function () {

        console.log("Deleted a burger");

        location.reload();

    });



});

