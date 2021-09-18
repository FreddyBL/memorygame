import React, { useRef, useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { useGameContext } from "../GameContext";
import { GameStates, Difficulties } from "./../GameConstants";

import ScoreSound from "../sounds/score.wav";
import WrongCardSound from "../sounds/wrong-card.wav";

export const PlayGameScene = () => {
  const [isPreviewing, setIsPreviewing] = useState(true);
  const gameAreaRef = useRef();
  const {
    setGameState,
    cards,
    isRightCardSelected,
    selectCard,
    isGameFinished,
    setAttempts,
    setRightAttempts,
    increaseLevel,
    setMatchedAttempts,
    difficulty,
    getGamePercentage,
    gameOver,
  } = useGameContext();

  const onCardClickHandler = (cardIdx) => {
    if (!isPreviewing) {
      if (isRightCardSelected(cardIdx)) {
        const audio = new Audio(ScoreSound);
        setRightAttempts((prev) => prev + 1);
        audio.play();
      } else {
        const audio = new Audio(WrongCardSound);
        audio.play();
        setMatchedAttempts((prev) => prev - 1);
      }
      selectCard(cardIdx);
    }
    setAttempts((prev) => prev + 1);
  };
  const getGameConfig = (difficulty_lvl) => {
    switch (difficulty_lvl) {
      case Difficulties.Easy: {
        return {
          previewTime: 800,
        };
      }
      case Difficulties.Medium: {
        return {
          previewTime: 600,
        };
      }
      case Difficulties.Hard: {
        return {
          previewTime: 275,
        };
      }
      default: {
        return {
          previewTime: 1000,
        };
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPreviewing(false);
    }, getGameConfig(difficulty).previewTime);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isGameFinished()) {
      increaseLevel();
      setGameState(GameStates.StateNextLevel);
    }
  });

  useEffect(() => {
    if (getGamePercentage() < 50) {
      gameOver();
    }
  }, [getGamePercentage, gameOver]);
  return (
    <div ref={gameAreaRef}>
      {cards.map((card) => (
        <GameCard
          disabled={isPreviewing}
          key={card.index}
          label={card.label}
          x={card.x}
          y={card.y}
          showLabel={isPreviewing}
          hide={card.clicked}
          sideLength={card.sidelength}
          onClick={() => {
            onCardClickHandler(card.index);
          }}
        />
      ))}
    </div>
  );
};
