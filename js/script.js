(function () {  
    $("#list--mobile").hide()

    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 767.98) {
            $("#closeMenuButton").hide();
            $("#list--mobile").hide(200);
            $("#openMenuButton").hide();
        } else {
            $("#openMenuButton").show();
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).on("resize", checkWidth);
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

$(".dot").on("click", (e) => {
    clearInterval(myInterval)
    myInterval = setInterval(changeItem, 4000)
    let id = e.currentTarget.id
    $(".dot").removeClass("dot--active")
    $(".info__item--mobile").hide()
    $(`.item${id.substring(id.length - 1)}`).show()
    $(`#${id}`).addClass("dot--active")
})

const changeItem = () => {

    let id = $(".dot--active").attr("id");
    $(`#${id}`).removeClass("dot--active");
    let num = parseInt(id.substring(id.length - 1))
    $(`.item${num}`).hide()
    if(num == 3){
        num = 1;
    } else {
        num += 1;
    }
    $(`.item${num}`).show()
    $(`#dot${num}`).addClass("dot--active");
    
}

let myInterval = setInterval(changeItem, 3000)