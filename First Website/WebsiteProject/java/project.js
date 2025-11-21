/*=========================================================================================================================*/
/*Hovereffect video's*/
/*=========================================================================================================================*/
/*Video 1*/
var video1 = document.getElementById("video1");
video1.onmouseover = function () {
    video1.play();
    video1.muted=true;
};
video1.onmouseout = function () {
    video1.pause();
    video1.currentTime = 0;
};

/*Video 2*/
var video2 = document.getElementById("video2");
video2.onmouseover = function () {
    video2.play();
    video2.muted=true;
};
video2.onmouseout = function () {
    video2.pause();
    video2.currentTime = 0;
};

/*Video 3*/
var video3 = document.getElementById("video3");
video3.onmouseover = function () {
    video3.play();
    video3.muted=true;
};
video3.onmouseout = function () {
    video3.pause();
    video3.currentTime = 0;
};

/*Slideshow*/
var slide = 0;
slideshow();

function slideshow(){
    var afbeelding = document.getElementsByClassName("slides");
    for(var i = 0; i<afbeelding.length;i++){
        afbeelding[i].style.display="none";
    }
    slide++;
    if(slide > afbeelding.length){
        slide = 1;
    }
    afbeelding[slide-1].style.display="block";
    setTimeout(slideshow,3000);
}