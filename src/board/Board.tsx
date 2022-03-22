import "./Board.scss";

import React, { useEffect, useState } from "react";

import { Card, CardListInterface, cardList } from "./CardLists";
import { CardGrid } from "./components/CardGrid";

export const Board = () => {
  const [cards, setCards] = useState<Array<CardListInterface>>();
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
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

  const handleChoice: Function = (card: Card): void => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo)
      if (choiceOne.src === choiceTwo.src) {
        resetTurns();
        setCards((prevState) => {
          return prevState?.map((card: any) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
      } else {
        resetTurns();
      }
  }, [choiceTwo]);

  return (
    <div className="board">
      <button className="btn-new-game" onClick={shuffleCards}>
        New Game
      </button>
      <CardGrid cards={cards} handleChoice={handleChoice} />
    </div>
  );
};
