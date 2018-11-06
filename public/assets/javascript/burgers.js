// if burger is devoured, on the index.handlebars page, move it from "available" list to "eaten" div
$(function() {
    // UPDATE BURGER LIST WHEN BUTTONS ARE CLICKED
    $("#devour-button").on("click", function(event) {
        // prevent page from reloading when button is clicked
        event.preventDefault();
        // add "data-id" attribute to the data tied to the button
        var burgerId = $(this).attr("data-id")    
        // variable that assigns the value "true" to the devoured state when called in ajax call
        var devouredBurger = {
            devoured: 1 // 1=true in mysql
        };
        // run the ajax call to update the list of burgers using PUT method
        $.ajax({
            method: "PUT",
            // "/api/burger/" = 404 error;  "/api/burgers/" = 500 error
            url: "/api/burgers/" + burgerId, //IT'S GETTING STUCK HERE...
            data: devouredBurger
        }).then(function(data) {
            console.log("The burger has been devoured!")
            // reload the page to update the list of available burgers
            location.reload();
        });
    });

    // CREATE NEW BURGERS AND BUTTONS FOR THE MENU
    $(".burger-creator").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            })
        // Send the POST request.
        // $.post("/api/burgers", newBurger)
        //     .then(function() {
        //         var burgerDiv = $("<div>");
        //         // var burgerId = $(this).data("id");
        //         // burgerDiv.attr(burgerId);
        //         burgerDiv.text("kayla burger")
        //         $(".available").append(burgerDiv);
        //         console.log("new burger added");
        //         location.reload();
        //     });
    });
});
