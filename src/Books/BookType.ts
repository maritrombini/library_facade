const bookType = ["Lançamento", "Antigo", "Premium"] as const;
//

export type TBookType = typeof bookType[number];

//export type TRentType = typeof rentPriceType[number];

export type TAddBookParams = {
  type: TBookType;
  title: string;
  pages: number;
  year: string;
  rentPrice: number;
};
