$(document).ready(function () {
    
    $(".uitlegcontainer2").mouseenter(function () {
        $(this).stop().animate({ left: "-50%" }, 500);
        $("#logohag").fadeIn();
    });

    $(".uitlegcontainer2").mouseleave(function () {
        $(this).stop().animate({ left: "0%" }, 500);
        $("#logohag").fadeOut();
    });

    $(".uitlegcontainer3").mouseenter(function () {
        $(this).stop().animate({ right: "0%" }, 500);
        $("#logopar").fadeIn();
    });

    $(".uitlegcontainer3").mouseleave(function () {
        $(this).stop().animate({ right: "50%" }, 500);
        $("#logopar").fadeOut();
    });
});