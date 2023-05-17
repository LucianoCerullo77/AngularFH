import data from "../../../../Trabajos/HomeHeroClon/Frontend/src/hooks/useData";

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 25,
  song: "Hurt",
  details: {
    author: "Jonny Cash",
    year: 2000,
  },
};

const song = "New Song";

const { song: anotherSong, songDuration: duration, details } = audioPlayer;

const { author } = details;

const {} = audioPlayer;

console.log(`song: `, song);
console.log(`song: `, anotherSong);
console.log(`duration: `, duration);
console.log(`author: `, author);

export {};
