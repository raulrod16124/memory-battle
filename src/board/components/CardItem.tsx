import "./CardItem.scss";

import React from "react";

import { Card } from "../CardLists";

interface Props {
  card: Card;
  handleChoice: any;
  flipped: boolean;
  disabled: boolean;
}

export const CardItem: React.FC<Props> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClickCard = (): void => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="img-front img" src={card.src} alt="card front" />
        <img
          className="img-back img"
          src="/img/cover.png"
          onClick={handleClickCard}
          alt="card back"
        />
      </div>
    </div>
  );
};
