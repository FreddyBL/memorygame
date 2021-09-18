import React from "react";
import { useGameContext } from "../../GameContext";
import { Bar } from "./styles.js";
import { GameStates } from "../../GameConstants";

export default function GameHeaderBar() {
  const { attempts, rightAttempts, getLevel, gameState, getGamePercentage } =
    useGameContext();

  const accuracy = Math.floor((rightAttempts / attempts) * 100);
  const percentage = getGamePercentage();

  let color = "green";
  if (percentage >= 90) {
    color = "#63ff9a";
  } else if (percentage >= 70 && percentage < 90) {
    color = "#fffa63";
  } else if (percentage < 70) {
    color = "#ff6363";
  }
  return (
    <Bar>
      <h5>Accuracy: {accuracy} %</h5>
      {gameState === GameStates.StatePlay && (
        <h5 style={{ color: color }}>Percentage: {percentage}</h5>
      )}
      <h5>Level: {getLevel()}</h5>
    </Bar>
  );
}
