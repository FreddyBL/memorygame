import React, { useEffect } from "react";
import { useGameContext } from "../GameContext";
import { useWindowDimensions } from "./../utils";
export const NextLevelScene = () => {
  const { width, height } = useWindowDimensions();
  const { startGame } = useGameContext();
  useEffect(() => {
    startGame(height, width);
  }, [height, width, startGame]);
  return <div></div>;
};
