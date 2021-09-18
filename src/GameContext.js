import React, { createContext, useState, useContext } from "react";

import {
  GameMode,
  GameStates,
  Difficulties,
  navBarHeight,
} from "./GameConstants";
import { Rectangle } from "./utils";
export const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

const defaultLvl = {};
for (const [key, value] of Object.entries(Difficulties)) {
  defaultLvl[key] = 1;
}

export const GameProvider = ({ children }) => {
  const [matchedCards, setMatchedCards] = useState(0);
  const [gameMode, setGameMode] = useState(GameMode.Numbers);
  const [gameState, setGameState] = useState(GameStates.StateSetup);
  const [difficulty, setDifficulty] = useState(Difficulties.Easy);
  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(1);
  const [rightAttempts, setRightAttempts] = useState(1);
  const [lvl, setLvl] = useState(defaultLvl);
  const [percentage, setPercentage] = useState(100);
  const [matchedAttempts, setMatchedAttempts] = useState(0);
  const maxCards = 9;
  const getGameCardVal = (idx) => {
    switch (gameMode) {
      case GameMode.Letters: {
        return String.fromCharCode("A".charCodeAt() + idx);
      }
      case GameMode.Numbers:
        return String.fromCharCode("0".charCodeAt() + idx + 1);
      default:
        return "?";
    }
  };
  const isGameFinished = () => {
    return matchedCards === getTotalCardsPerLvl();
  };

  const getTotalCardsPerLvl = (lvl = getLevel()) => {
    if (lvl === 1) {
      return 2;
    } else if (lvl > 1 && lvl <= 3) {
      return 3;
    } else if (lvl > 3 && lvl <= 4) {
      return 4;
    } else if (lvl > 4 && lvl <= 8) {
      return 5;
    } else if (lvl > 8 && lvl <= 12) {
      return 6;
    } else if (lvl > 12 && lvl <= 16) {
      return 7;
    } else if (lvl > 16 && lvl <= 20) {
      return 8;
    } else if (lvl > 20) {
      return 9;
    }
  };
  const increaseLevel = () => {
    const oldLvl = lvl;
    oldLvl[difficulty.label]++;
    setLvl(oldLvl);
  };
  const setLevel = (value) => {
    const oldLvl = lvl;
    oldLvl[difficulty.label] = value;
    setLvl(oldLvl);
  };
  const getLevel = () => {
    return lvl[difficulty.label];
  };

  const getGamePercentage = () => {
    return Math.floor((matchedAttempts / getTotalCardsPerLvl()) * 100);
  };
  const gameOver = () => {
    setLevel(1);
    setAttempts(1);
    setRightAttempts(1);
    setGameState(GameStates.StateGameOver);
  };
  const setupGame = (winHeight, winWidth, lvl = getLevel()) => {
    let cards = [];
    let cardsSet = false;
    setMatchedCards(0);
    let idx = 0;
    let sidelength = 60;
    if (winWidth <= 768) {
      sidelength = 60;
    } else if (winWidth <= 1024) {
      sidelength = 70;
    } else if (winWidth <= 1200) {
      sidelength = 80;
    } else {
      sidelength = 105;
    }
    const minSeparation = 5;
    const boxSide = sidelength + minSeparation;
    const horizontalCount = Math.floor(winWidth / boxSide);
    const verticalCount = Math.floor(winHeight / boxSide);
    const totalCount = horizontalCount * verticalCount;
    const totalCards = getTotalCardsPerLvl(lvl);
    if (totalCount >= maxCards) {
      do {
        let x = Math.random();
        let y = Math.random();
        let realx = Math.floor(x * (winWidth - sidelength - minSeparation));
        let realy = Math.floor(
          y * (winHeight - navBarHeight - sidelength - minSeparation)
        );
        const r1 = new Rectangle(
          realx,
          realy,
          sidelength + minSeparation,
          sidelength + minSeparation
        );
        let collides = false;
        for (let i = 0; i < cards.length; i++) {
          let r2 = new Rectangle(
            cards[i].x,
            cards[i].y,
            sidelength + minSeparation,
            sidelength + minSeparation
          );
          if (Rectangle.collides(r1, r2)) {
            collides = true;
            break;
          }
        }
        if (!collides) {
          cards.push({
            label: getGameCardVal(idx),
            index: idx,
            clicked: false,
            x: realx,
            y: realy,
            sidelength: sidelength,
          });
          if (idx === totalCards - 1) {
            cardsSet = true;
          }
          idx++;
        }
      } while (!cardsSet);
      setMatchedAttempts(totalCards);
      setCards(cards);
      return true;
    }
    return false;
  };

  const startGame = (height, width, lvl = getLevel()) => {
    if (setupGame(height, width, lvl)) {
      setGameState(GameStates.StatePlay);
    } else {
      alert("Error: Screen is too small to play the game.");
    }
  };
  const isRightCardSelected = (cardIdx) => {
    return cardIdx === matchedCards;
  };
  const selectCard = (cardIdx) => {
    if (isRightCardSelected(cardIdx)) {
      let cardsTmp = cards;
      cardsTmp[cardIdx].clicked = true;
      setCards(cardsTmp);
      setMatchedCards((prev) => prev + 1);
      setScore((prev) => prev + 1);
      return true;
    } else {
      setScore((prev) => prev - 1);
    }
    return false;
  };

  const values = {
    getGameCardVal,
    gameMode,
    setGameMode,
    gameState,
    setGameState,
    cards,
    matchedCards,
    selectCard,
    isRightCardSelected,
    setupGame,
    isGameFinished,
    score,
    difficulty,
    setDifficulty,
    attempts,
    setAttempts,
    rightAttempts,
    setRightAttempts,
    getLevel,
    getTotalCardsPerLvl,
    increaseLevel,
    percentage,
    setPercentage,
    matchedAttempts,
    setMatchedAttempts,
    getGamePercentage,
    lvl,
    gameOver,
    startGame,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
