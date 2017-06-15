function index() {
	
    window.location.href = "two.html";
}
function playPause() {

    var music = document.getElementById('bgvid1');
    var music_btn = document.getElementById('music_btn2');
    if (music.paused) {
        music.play();
      
    } else {
        music.pause();
     
    }
}
function index1() {
    window.location.href = "index.html";
}
function index2() {
    window.location.href = "three.html";
}
function index3() {
    window.location.href = "four.html";
}
function index4() {
    window.location.href = "five.html";
}

function play(){
	    var music = document.getElementById('bgvid1');
    var music_btn = document.getElementById('music_btn2');
        music.play();
}

function pause(){
	    var music = document.getElementById('bgvid1');
    var music_btn = document.getElementById('music_btn2');
        music.pause();

}

$(function () {
    $('.menuBox').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
});


