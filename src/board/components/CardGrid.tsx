import "./CardGrid.scss";

import React from "react";

import { Card } from "../CardLists";
import { CardItem } from "./CardItem";

interface Props {
  cards: any;
  handleChoice: any;
  choiceOne: Card | null;
  choiceTwo: Card | null;
  disabled: boolean;
}

export const CardGrid: React.FC<Props> = ({
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
}) => {
  return (
    <div className="card-grid">
      {cards &&
        cards.map((card: Card, index: number) => {
          return (
            <CardItem
              key={index}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
    </div>
  );
};
