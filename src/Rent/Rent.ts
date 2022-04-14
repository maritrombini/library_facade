export class Rent {
  userId: string;
  userName: string;
  bookId: string;
  bookTitle: string;
  upto: string;

  constructor(
    userId: string,
    userName: string,
    bookId: string,
    bookTitle: string,
    upto: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.upto = upto;
  }
}
