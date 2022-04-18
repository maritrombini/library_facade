import { TBookType } from "Books/BookType";

export class Rent {
  userId: string;
  userName: string;
  bookId: string;
  bookType: TBookType;
  bookTitle: string;
  upto: string;

  constructor(
    userId: string,
    userName: string,
    bookId: string,
    bookType: TBookType,
    bookTitle: string,
    upto: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.bookId = bookId;
    this.bookType = bookType;
    this.bookTitle = bookTitle;
    this.upto = upto;
  }
}
