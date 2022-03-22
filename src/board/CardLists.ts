export interface Card {
  id: number;
  src: string;
  matched: boolean;
}
export interface CardListInterface {
  [index: number]: Card;
}

export const cardList: CardListInterface = [
  { id: 0, src: "/img/helmet-1.png", matched: false },
  { id: 0, src: "/img/potion-1.png", matched: false },
  { id: 0, src: "/img/ring-1.png", matched: false },
  { id: 0, src: "/img/scroll-1.png", matched: false },
  { id: 0, src: "/img/shield-1.png", matched: false },
  { id: 0, src: "/img/sword-1.png", matched: false },
];
