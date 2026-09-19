const music = document.getElementById("music")
const song = document.querySelector(".songs")
const record = document.querySelector(".record")
song.addEventListener("click",()=>{
    music.src = song.dataset.song;
    music.play();
    record.classList.add("playing");
})
music.addEventListener("play" ,()=> {
    record.classList.add("playing");
})
music.addEventListener("pause",()=> {
    record.classList.remove("playing");
})
music.addEventListener("ended",()=> {
    
})

const play = document.querySelector("#play")
play.addEventListener("click",()=> {
    if(music.paused) {
        music.play();

    } else {
        music.pause()
    }
})
