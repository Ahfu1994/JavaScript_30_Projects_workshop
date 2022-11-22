const music_container = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_container = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['Contra', 'HavestMoon', 'Mario'];
let index = 2;

function loadSong(song) {
    title.innerText = `song : ${song}.mp3`;
    cover.src = `cover/${song}.jpg`;
    audio.src = `music/${song}.mp3`;

}

playBtn.addEventListener('click', () => {
    const isPlay = music_container.classList.contains('play'); //check song playing
    if (isPlay) {
        pauseSong(); // stop song

    } else {
        playSong(); // play song
    }
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = songs.length - 1;
    }
    loadSong(songs[index]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }
    loadSong(songs[index]);
    playSong();
});

function playSong() {
    music_container.classList.add('play')
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    music_container.classList.remove('play');
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    audio.pause();
}

audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

progress_container.addEventListener('click', setProcess);

function setProcess(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


audio.addEventListener('ended', nextSong);

function nextSong() {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }
    loadSong(songs[index]);
    playSong();
}

loadSong(songs[index])

// let arr = [2, 1000, 4, 5, 1, 7, 8];
// arr.sort((a, b) => { return a - b });
// console.log(arr);