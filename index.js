var button = document.getElementById("button");

button.addEventListener("click",playPause);

var video = document.getElementById("myVideo");


function playPause(){
    if(video.paused){
        video.play();
        button.innerHTML = "Pause";
    }else{
        video.pause();
        button.innerHTML = "Play";
    }
}