$(document).ready(function() {
    $(".picSteps").hide();
    $(".picSteps2").hide();
    
    $(".fadebutdown1").click(function() {
        $(".picSteps").slideDown("slow");
        $(".fadebutdown1").hide();

    });

    $(".fadebutup1").click(function() {
        $(".picSteps").slideUp("slow");
        $(".fadebutdown1").show();
    });

    $(".fadebutdown2").click(function() {
        $(".picSteps2").slideDown("slow");
        $(".fadebutdown2").hide();

    });

    $(".fadebutup2").click(function() {
        $(".picSteps2").slideUp("slow");
        $(".fadebutdown2").show();
    });
});