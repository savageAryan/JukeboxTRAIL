const music = document.getElementById("music")
const song = document.querySelector(".songs")
const record = document.querySelector(".record")
const songname = document.querySelector("#songname p")
song.textContent = song.dataset.song
song.addEventListener("click",()=>{
    music.src = song.dataset.song;
    songname.textContent = song.textContent
    music.play();
    record.classList.add("playing");
})
music.addEventListener("play" ,()=> {
    record.classList.add("playing");
    songname.classList.add("namescroll")
})
music.addEventListener("pause",()=> {
    record.classList.remove("playing");
    songname.classList.remove("namescroll")
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
