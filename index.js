const music = document.getElementById("music")
const songs = document.querySelectorAll(".songs")
const record = document.querySelector(".record")
const songname = document.querySelector("#songname p")
const play = document.querySelector("#play")
const playicon = play.querySelector("i")
let songsource = "null"
songname.textContent = songs.textContent
console.log(songs);
console.log(playicon)
music.addEventListener("play" ,()=> {
    record.classList.add("playing");
    songname.classList.add("namescroll")
    playicon.classList.remove("fa-play");
    playicon.classList.add("fa-pause");
})
music.addEventListener("pause",()=> {
    record.classList.remove("playing");
    songname.classList.remove("namescroll")
    playicon.classList.remove("fa-pause");
    playicon.classList.add("fa-play");
})
music.addEventListener("ended",()=> {
    
})
play.addEventListener("click",()=> {
    if(music.paused) {
        music.play();
        

    } else {
        music.pause();
        
    }
})
songs.forEach(song => {
    song.textContent = song.dataset.song
    song.addEventListener("click",()=>{
        songs.forEach(s => {
            s.classList.remove("active");

        });
        song.classList.add("active");
        songname.textContent = song.dataset.song
        music.src = song.dataset.song
        music.play();
    });
});
