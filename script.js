var musicsList = [
  {
    title: "cancion music",
    artist: "artista",
    src: "music/Bop Walker - Freedom Trail Studio.mp3",
    img: "image/guitar.jpg",
  },
  {
    title: "cancion music 2",
    artist: "artista nome 2",
    src: "music/Bop Walker - Freedom Trail Studio.mp3",
    img: "image/guitar.jpg",
  },
];

var music = document.querySelector("audio");
var musicDuration = document.querySelector(".end_music");
var image = document.querySelector(".image");
var musicName = document.querySelector(".description h2");
var artistName = document.querySelector(".description i");
var musicListIndex = 0;

renderMusic(musicListIndex);

function renderMusic(index) {
  music.setAttribute("src", musicsList[index].src);

  music.addEventListener("loadeddata", () => {
    musicName.textContent = musicsList[index].title;
    artistName.textContent = musicsList[index].artist;
    image.src = musicsList[index].img;
    musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
  });
}

function playMusic() {
  music.play();

  document.querySelector(".pause").style.display = "block";
  document.querySelector(".play").style.display = "none";
}

function pauseMusic() {
  music.pause();

  document.querySelector(".play").style.display = "block";
  document.querySelector(".pause").style.display = "none";
}

function secondsToMinutes(seconds) {
  var minutesField = Math.floor(seconds / 60);
  var secondsField = seconds % 60;

  if (secondsField < 10) {
    secondsField = `0${secondsField}`;
  }

  return `${minutesField}:${secondsField}`;
}

function updateBar() {
  var bar = document.querySelector("progress");
  var timePast = document.querySelector(".start_music");

  bar.style.width =
    Math.floor((music.currentTime / music.duration) * 100) + "%";
  timePast.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

document.querySelector(".back").addEventListener("click", () => {
  musicListIndex--;
  if (musicListIndex < 0) {
    musicListIndex = 2;
  }
  renderMusic(musicListIndex);
});
document.querySelector(".forward").addEventListener("click", () => {
  musicListIndex++;
  if (musicListIndex > 2) {
    musicListIndex = 0;
  }
  renderMusic(musicListIndex);
});
document.querySelector(".play").addEventListener("click", playMusic);
document.querySelector(".pause").addEventListener("click", pauseMusic);
music.addEventListener("timeupdate", updateBar);
