import { TBookType } from "Books/BookType";

export type TRentParams = {
  userId: string;
  userName: string;
  bookId: string;
  bookType: TBookType;
  bookTitle: string;
  upto: string;
};
