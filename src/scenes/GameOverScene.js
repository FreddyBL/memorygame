import React from "react";
import { useGameContext } from "../GameContext";
import { GameStates } from "../GameConstants";
import { PageContent, Button } from "../theme/GlobalComponents";
export const GameOverScene = () => {
  const { setGameState } = useGameContext();

  return (
    <PageContent>
      <h1 style={{ color: "rgb(255, 99, 99)" }}>GAME OVER</h1>
      <br />
      <Button
        onClick={() => {
          setGameState(GameStates.StateSetup);
        }}
      >
        <h3>Play Again!</h3>
      </Button>
    </PageContent>
  );
};
