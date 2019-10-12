export enum Color {
  Clubs = 'Clubs',
  Diamonds = 'Diamonds',
  Hearts = 'Hearts',
  Spades = 'Spades',
}

export const allColors = (): string[] => {
  const colorKeys: string[] = Object.keys(Color);
  return colorKeys.map(k => Color[k as keyof typeof Color]);
};
