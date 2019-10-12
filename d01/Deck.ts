import { Card } from './Card';
import { Color } from './Color';
import { allValues } from './Value';

class Deck extends Array {
  allSpades: Card[];
  allDiamonds: Card[];
  allHearts: Card[];
  allClubs: Card[];
  allCards: Card[];
  cards: Card[];
  discards: Card[];
  outs: Card[];
  description: string;

  constructor(isShuffled: boolean = false) {
    super();
    this.allSpades = allValues().map(value => new Card(Color.Spades, value));
    this.allDiamonds = allValues().map(
      value => new Card(Color.Diamonds, value),
    );
    this.allHearts = allValues().map(value => new Card(Color.Hearts, value));
    this.allClubs = allValues().map(value => new Card(Color.Clubs, value));
    this.allCards = [
      ...this.allSpades,
      ...this.allDiamonds,
      ...this.allHearts,
      ...this.allClubs,
    ];
    this.cards = this.allCards;
    if (isShuffled) this.shuffle();
    this.description = this.cards.map(card => card.description).join('\n');
    this.discards = [];
    this.outs = [];
  }

  shuffle() {
    this.cards.sort(() => 0.5 - Math.random());
    this.cards = this.allCards;
  }

  draw() {
    const firstCard = this.cards.shift();
    if (firstCard instanceof Card) this.outs.push(firstCard);
  }

  fold(card: Card) {
    const filteredOuts = this.outs.filter(outCard => !outCard.isEqual(card));
    if (filteredOuts.length === this.outs.length - 1) {
      this.outs = filteredOuts;
      this.discards.push(card);
    }
  }
}
