import { TBookType } from "Books/BookType";

export class Rent {
  rentId: string;
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

  constructor(
    rentId: string,
    userId: string,
    userName: string,
    bookId: string,
    bookType: TBookType,
    bookTitle: string,
    bookYear: number,
    bookPages: number,
    upto: string,
    rentPrice: number,
    paymentStatus: boolean
  ) {
    this.rentId = rentId;
    this.userId = userId;
    this.userName = userName;
    this.bookId = bookId;
    this.bookType = bookType;
    this.bookTitle = bookTitle;
    this.bookYear = bookYear;
    this.bookPages = bookPages;
    this.upto = upto;
    this.rentPrice = rentPrice;
    this.paymentStatus = paymentStatus;
  }
}
