// if burger is devoured, on the index.handlebars page, move it from "available" list to "eaten" div
$(function() {
    $("#devour-button").on("click", function(event) {
        event.preventDefault();
        var burgerId = $(this).attr("data-id")
        console.localStorage(burgerId)
        
        var devouredBurger = {
            devoured: true
        };

        // run the ajax call to update the list of burgers
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burgerId,
            data: devouredBurger
        }).then(function(data) {
            console.log("The burger has been devoured!")
            // reload the page to update the list of available burgers
            location.reload();
        });

        //
        $("burger-creator").on("submit", function(event) {
            event.preventDefault();

            var newBurger = {
                burger_name: $("#new-burger").val().trim(),
                // devoured: $("false")
            }
            // Send the POST request.
        $.ajax({
                method: "POST",
                url: "/api/burgers/" + burgerId,
                data: newBurger
            }).then(function(data) {
                console.log("A new burger has been added to the menu!");
                // Reload the page to get the updated list
                location.reload();
            });
        });
    });
});