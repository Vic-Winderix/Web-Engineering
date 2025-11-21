$(document).ready(function(){
    $("#esc").hover(
        function(){
            $(".controlsexplained p").text("Open menu")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );

    $("#inv").hover(
        function(){
            $(".controlsexplained p").text("Open inventory")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );

    $("#up").hover(
        function(){
            $(".controlsexplained p").text("Walk up")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );

    $("#left").hover(
        function(){
            $(".controlsexplained p").text("Walk left")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );

    $("#down").hover(
        function(){
            $(".controlsexplained p").text("Walk down")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );

    $("#right").hover(
        function(){
            $(".controlsexplained p").text("Walk right")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );

    $("#space").hover(
        function(){
            $(".controlsexplained p").text("Attack")
        },
        function(){
            $(".controlsexplained p").text("Kies knop...")
        }
    );
});