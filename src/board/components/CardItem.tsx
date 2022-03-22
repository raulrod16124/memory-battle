import "./CardItem.scss";

import React from "react";

export const CardItem = ({ card }: any) => {
  return (
    <div className="card">
      <img className="img-front" src={card.src} alt="card front" />
      <img className="img-back" src="/img/cover.png" alt="card back" />
    </div>
  );
};
