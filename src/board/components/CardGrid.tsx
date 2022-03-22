import "./CardGrid.scss";

import React from "react";

import { CardListInterface } from "../CardLists";
import { CardItem } from "./CardItem";

export const CardGrid = ({ cards }: any): JSX.Element => {
  return (
    <div className="card-grid">
      {cards &&
        cards.map((card: CardListInterface, index: number) => {
          return <CardItem key={index} card={card} />;
        })}
    </div>
  );
};
