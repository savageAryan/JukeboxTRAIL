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
music.addEventListener("ended",()=>{
    currentsong++
    music.play()
})
backward.addEventListener("click",()=>{
    const songs = Array.from(document.querySelectorAll(".songs"));
    
    if (songs.length === 0) return;
    currentsong--
    if (currentsong < 0) {
        currentsong = songs.length - 1
    }
    songs[currentsong].click();
})


forward.addEventListener("click",()=>{
    const songs = Array.from(document.querySelectorAll(".songs"));
    if (songs.length === 0) return;

    currentsong++
    if (currentsong >= songs.length) {
        currentsong = 0
    }

    songs[currentsong].click();
})
volumeslider.addEventListener("input",()=> {
    music.volume = volumeslider.value;
})

music.addEventListener("play" ,()=> {
    record.classList.add("playing");
    console.log("papad")
    songname.classList.add("namescroll");

    play.classList.add("playing")
})
music.addEventListener("pause",()=> {
    record.classList.remove("playing");
    songname.classList.remove("namescroll");
    console.log("jhandu")

    play.classList.remove("playing")
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
function songselect(song) {
    const allsongs = Array.from(document.querySelectorAll(".songs"))
    currentsong = allsongs.indexOf(song)
    allsongs.forEach(s => {
        s.classList.remove("active")
    })
    song.classList.add("active")
    songname.textContent = song.dataset.name || song.dataset.song.replace("songs/", "");
    music.src = song.dataset.song;
    music.play();
}
songs.forEach(song => {

    song.textContent = song.dataset.song;

    song.addEventListener("click", () => {
        songselect(song);
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
    audiofile.value = "";
    const button = document.createElement("button");
    button.classList.add("songs");
    button.dataset.song = url
    button.textContent = namesong.value;
    button.addEventListener("click", () => {
    songselect(button)
    });

    document.querySelector("#songlist").appendChild(button);
    })


