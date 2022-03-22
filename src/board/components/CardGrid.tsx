import "./CardGrid.scss";

import React from "react";

import { Card } from "../CardLists";
import { CardItem } from "./CardItem";

interface Props {
  cards: any;
  handleChoice: any;
}

export const CardGrid: React.FC<Props> = ({ cards, handleChoice }) => {
  return (
    <div className="card-grid">
      {cards &&
        cards.map((card: Card, index: number) => {
          return (
            <CardItem key={index} card={card} handleChoice={handleChoice} />
          );
        })}
    </div>
  );
};
