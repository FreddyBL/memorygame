export const GameMode = {
  Letters: {
    id: "letters",
    label: "Letters",
  },
  Numbers: {
    id: "numbers",
    label: "Numbers",
  },
};
export const OrderChoices = {
  Ascending: 0,
  Descending: 1,
};

export const GameStates = {
  StateSetup: 0, //Pick gameMode and difficulty
  StatePlay: 1, //Play!
  StateGameOver: 2,
  StateNextLevel: 3,
};

export const Difficulties = {
  Easy: {
    id: "easy",
    label: "Easy",
  },
  Medium: {
    id: "medium",
    label: "Medium",
  },
  Hard: {
    id: "hard",
    label: "Hard",
  },
};

export const navBarHeight = 70;
export const gameOverPercentThreshold = 50;
