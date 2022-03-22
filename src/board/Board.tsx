import "./Board.scss";

import React, { useState } from "react";

import { CardListInterface, cardList } from "./CardLists";
import { CardGrid } from "./components/CardGrid";

export const Board = () => {
  const [cards, setCards] = useState<CardListInterface>();
  const [turns, setTurns] = useState<number>(0);
  //Function to duplicate and do a random cardLists
  const shuffleCards = () => {
    const shuffledCards = [
      ...Object.values(cardList),
      ...Object.values(cardList),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="board">
      <button className="btn-new-game" onClick={shuffleCards}>
        New Game
      </button>
      <CardGrid cards={cards} />
    </div>
  );
};
