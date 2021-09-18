import React, { useContext } from "react";
import { GameContext } from "./GameContext";
import { GameStates } from "./GameConstants";
import "./App.scss";
import GameCard from "./components/GameCard";
import { useWindowDimensions } from "./utils";
import { PlayGameScene } from "./scenes/PlayGameScene";
import { SetupGameScene } from "./scenes/SetupGameScene";
import Particles from "react-particles-js";
import GameHeaderBar from "./components/GameHeaderBar/GameHeaderBar";
import { PageWrapper } from "./theme/GlobalComponents";
import { GameOverScene } from "./scenes/GameOverScene";
import { NextLevelScene } from "./scenes/NextLevelScene";
function App() {
  const { height, width } = useWindowDimensions();

  const { gameState } = useContext(GameContext);
  return (
    <PageWrapper>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        height={height}
        width={width}
        params={{
          particles: {
            number: {
              value: 110,
              density: {
                enable: true,
                value_area: 1803.4120608655228,
              },
            },
            color: {
              value: "#f49f2f",
            },
          },
        }}
      />
      <GameHeaderBar />
      {gameState === GameStates.StateSetup && <SetupGameScene />}
      {gameState === GameStates.StatePlay && <PlayGameScene />}
      {gameState === GameStates.StateGameOver && <GameOverScene />}
      {gameState === GameStates.StateNextLevel && <NextLevelScene />}
    </PageWrapper>
  );
}

export default App;
