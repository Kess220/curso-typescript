import { Music } from "../protocols";

const musics: Music[] = [];

function getMusics() {
  return musics;
}

function createMusic(music: Music) {
  musics.push(music);
}

const musicService = {
  getMusics,
  createMusic
}

export default musicService;

