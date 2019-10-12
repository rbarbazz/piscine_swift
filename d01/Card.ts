import { Color } from './Color';
import { Value } from './Value';

export class Card {
  color: Color;
  value: Value;
  description: string;

  constructor(color: Color, value: Value) {
    this.color = color;
    this.value = value;
    this.description = `${Value[this.value]} of ${Color[this.color]}`;
  }

  isEqual(card: Card): boolean {
    return card.color === this.color && card.value === this.value
      ? true
      : false;
  }
}
