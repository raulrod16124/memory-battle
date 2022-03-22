import "./CardItem.scss";

import React from "react";

import { Card } from "../CardLists";

interface Props {
  card: Card;
  handleChoice: any;
}

export const CardItem: React.FC<Props> = ({ card, handleChoice }) => {
  const handleClickCard = (): void => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <img className="img-front img" src={card.src} alt="card front" />
      <img
        className="img-back img"
        onClick={handleClickCard}
        src="/img/cover.png"
        alt="card back"
      />
    </div>
  );
};
