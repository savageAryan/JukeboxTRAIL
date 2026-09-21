const music = document.getElementById("music")
const songs = document.querySelectorAll(".songs")
const record = document.querySelector(".record")
const songname = document.querySelector("#songname p")
const play = document.querySelector("#play")
const playicon = document.querySelector("#playicon")
const volumeslider = document.getElementById("volume")
const forward = document.getElementById("forward")
let currentsong = 0;
const backward = document.getElementById("backward")

backward.addEventListener("click",()=>{
    if (songs.length === 0) return;
    currentsong--
    if (currentsong < 0) {
        currentsong = songs.length - 1
    }
    songs[currentsong].click();
})


forward.addEventListener("click",()=>{
    if (songs.length === 0) return;

    currentsong++
    if (currentsong > songs.length) {
        currentsong = 0
    }

    songs[currentsong].click();
})
volumeslider.addEventListener("input",()=> {
    music.volume = volumeslider.value;
})

music.addEventListener("play" ,()=> {
    record.classList.add("playing");
    songname.classList.add("namescroll")
    playicon.classList.remove("fa-play")
    playicon.classList.add("fa-pause")
})
music.addEventListener("pause",()=> {
    record.classList.remove("playing");
    songname.classList.remove("namescroll")
    playicon.classList.remove("fa-pause")
    playicon.classList.add("fa-play")
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
        songname.textContent = song.dataset.song.replace("songs/","");
        music.src = song.dataset.song
        music.play();
    });
});
const plus = document.getElementById("plus")
const filebox = document.getElementById("filediv")
plus.addEventListener("click",()=>{
    filebox.classList.add("active");
})

const audiofile = document.getElementById("audiofile")
const addbutton = document.getElementById("songadd-button")
const namesong = document.getElementById("namesong")

addbutton.addEventListener("click",()=>{
    filebox.classList.remove("active")
    const file = audiofile.files[0]
    if(! file) return;
    const url = URL.createObjectURL(file);
    audiofile.file = null
    const button = document.createElement("button");
    button.classList.add("songs");
    button.textContent = namesong.value;
    button.addEventListener("click", () => {
    music.src = url;
    music.play();
    });

    document.querySelector("#songlist").appendChild(button);
    })


