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

// const song = "New Song";

// const { song: anotherSong, songDuration: duration, details } = audioPlayer;

// const { author } = details;

const {} = audioPlayer;

// console.log(`song: `, song);
// console.log(`song: `, anotherSong);
// console.log(`duration: `, duration);
// console.log(`author: `, author);

//////////////////////////////////////////////////////////////////////////////

const dbz: string[] = ["Goku", "Vegeta", "Gohan", "Trunks"];

const trunks = dbz[3] || "No character";

const [p1, p2, p3, p4, p5 = "Not found"]: string[] = [
  "Goku",
  "Vegeta",
  "Gohan",
  "Trunks",
];

console.log(`Character :`, dbz[3]);
console.log(`Character :`, trunks);
console.log(`Character :`, p5);

export {};
