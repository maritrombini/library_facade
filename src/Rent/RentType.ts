import { TBookType } from "Books/BookType";

export type TRentParams = {
  userId: string;
  userName: string;
  bookId: string;
  bookType: TBookType;
  bookTitle: string;
  bookYear: number;
  bookPages: number;
  upto: string;
  rentPrice: number;
  paymentStatus: boolean;
  rentDate: string;
};
