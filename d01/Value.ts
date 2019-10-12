export enum Value {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

export const allValues = (): number[] => {
  const valueKeys: string[] = Object.keys(Value);
  return valueKeys
    .map(k => Value[k as keyof typeof Value])
    .filter(x => typeof x === 'number');
};
