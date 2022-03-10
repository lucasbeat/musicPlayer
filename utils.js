var musicsList = [
  {
    title: "guitar solo",
    artist: "artista",
    src: "music/Bop Walker - Freedom Trail Studio.mp3",
    img: "image/guitar.jpg",
  },
];

var music = document.querySelector("audio");
var musicDuration = document.querySelector(".end_music");
var image = document.querySelector(".image");
var musicName = document.querySelector(".description h2");
var artistName = document.querySelector(".description i");

musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
