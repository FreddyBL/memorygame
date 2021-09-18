import React from "react";
import { useGameContext } from "../GameContext";
import { useWindowDimensions } from "./../utils";
import { PageContent, Button } from "../theme/GlobalComponents";
import { ChoiceSelector } from "../components/ChoiceSelector/ChoiceSelector";
import { Difficulties, GameMode } from "../GameConstants";
export const SetupGameScene = () => {
  const { height, width } = useWindowDimensions();
  const { difficulty, setDifficulty, gameMode, setGameMode, startGame } =
    useGameContext();

  return (
    <PageContent>
      <h1>Memory Game</h1>
      <br />
      <h4>Play Now!</h4>
      <br />
      <br />
      <h6>Gamemode:</h6>
      <ChoiceSelector
        choices={GameMode}
        choice={gameMode}
        setChoice={setGameMode}
      />
      <h6>Difficulty:</h6>
      <ChoiceSelector
        choices={Difficulties}
        choice={difficulty}
        setChoice={setDifficulty}
      />
      <br />
      <Button
        onClick={() => {
          startGame(height, width);
        }}
      >
        <h4>Play!</h4>
      </Button>
    </PageContent>
  );
};
