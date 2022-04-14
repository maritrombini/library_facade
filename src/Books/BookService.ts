import { Book } from "./Book";

export class BookService {
  private static instance: BookService;
  books: Book[] = [];
  private constructor() {}
  static getInstance() {
    if (!BookService.instance) {
      BookService.instance = new BookService();
    }
    return BookService.instance;
  }
  add(title: string) {
    try {
      const book = new Book(
        Math.trunc(Math.random() * 50 + 1).toString(),
        title
      );
      this.books.push(book);
      return book;
    } catch (error) {
      throw new Error(`BookService: ${error}`);
    }
  }
  showAll(): Book[] {
    return this.books;
  }
  edit(id: string, title: string) {
    const editedBook = this.books.forEach((book) => {
      if (book.id === id) {
        book.setTitle(title);
      }
    });
    try {
      return editedBook;
    } catch (error) {
      throw new Error(`BookService: ${error}`);
    }
  }
  sort(): Book[] {
    const booksCopy = this.books;
    for (let i = 0; i < booksCopy.length - 1; i++) {
      let minorEl = i;
      for (let j = i + 1; j < booksCopy.length; j++) {
        if (parseInt(booksCopy[j].id) < parseInt(booksCopy[minorEl].id)) {
          minorEl = j;
        }
      }
      const changePosition = booksCopy[minorEl];
      booksCopy[minorEl] = booksCopy[i];
      booksCopy[i] = changePosition;
    }
    return booksCopy;
  }
}
