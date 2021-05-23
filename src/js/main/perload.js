window.addEventListener('DOMContentLoaded', () => {

    setTimeout(function () {

        $(".perloader").slideUp("slow");


    }, 200)


    

})


$(document).ready(function () {


    $(".corona__close ").on("click", function (e) {
        $(this).parents(".corona").slideUp();
         e.preventDefault()
    });
    $(".menu__close ").on("click", function (e) {
        $(this).parents(".menu").slideUp("slow");
         e.preventDefault()
    });
    
    

})




