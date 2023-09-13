const game: {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string;
} = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14", // pode ser um Date. É opcional (para jogos ainda não lançados).
};

const games = [game];

function play(game: {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string;
}): void {
  console.log(game);
}
