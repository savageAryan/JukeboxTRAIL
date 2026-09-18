const music = document.getElementById("music")
const song = document.querySelector(".songs")

song.addEventListener("click",()=>{
    music.src = song.dataset.song;
    music.play();
})
