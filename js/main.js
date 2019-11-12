$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav").slideToggle(400);
    })
    $(window).resize(function () {
        if($(".hamburger").css("display") == "none")
        {
            $(".nav").css("display","block");
        }
    })
})