(function () {  
    $("#list--mobile").hide()

    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 767.98) {
            $("#closeMenuButton").hide();
            $("#list--mobile").hide(200);
        } else {
            $("#openMenuButton").show();
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})();

$("#openMenuButton").on("click", () => {
    console.log("click");
    $("#openMenuButton").hide();
    $("#closeMenuButton").show();
    $("#list--mobile").show(200);
})


$("#closeMenuButton").on("click", () => {
    console.log("click");
    $("#closeMenuButton").hide();
    $("#openMenuButton").show();
    $("#list--mobile").hide(200);
})

