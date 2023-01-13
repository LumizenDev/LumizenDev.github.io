window.onload = function(){
    console.log("LOADED");

    var myVideo = document.getElementById("video1");
    var ppbutton = document.getElementById("vidbutton");
    ppbutton.addEventListener("click", playPause);
    // myVideo.width = 560;

    function playPause() { 
        if (myVideo.paused) {
            myVideo.play();
            ppbutton.innerHTML = "Pause";
            }
        else  {
            myVideo.pause(); 
            ppbutton.innerHTML = "Play";
            }
    }
}