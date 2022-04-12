const LIMITCHARACTERS = 100;

export class Book {
  id: string;
  title: string;
  constructor(id: string, title: string) {
    if (title.length >= LIMITCHARACTERS) {
      throw new Error(
        `Title must be less than ${LIMITCHARACTERS} characters! Limit exceeded!`
      );
    } else if (!title) {
      throw new Error(`Title not found. You must provide a valid title!`);
    }
    this.id = id;
    this.title = title;
  }
  setTitle(newTitle: string): void {
    if (newTitle.length >= LIMITCHARACTERS) {
      throw new Error(
        `Title must be less than ${LIMITCHARACTERS} characters! Limit exceeded!`
      );
    } else if (!newTitle) {
      throw new Error(
        `Cannot edit, title not found. You must provide a valid title!`
      );
    }
    this.title = newTitle;
  }
}

export class BookService {
  books: Book[] = [];
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

export class Rent {
  userId: string;
  bookId: string;
  upto: string;
  constructor(userId: string, bookId: string, upto: string) {
    this.userId = userId;
    this.bookId = bookId;
    this.upto = upto;
  }
}

export class RentService {
  rents: Rent[] = [];
  rent(userId: string, bookId: string, upto: string) {
    try {
      const rentBook = new Rent(userId, bookId, upto);
      this.rents.push(rentBook);
      return rentBook;
    } catch (error) {
      throw new Error(`RentService: ${error}`);
    }
  }
  showRentings(): Rent[] {
    return this.rents;
  }
  showSortedRentings(): Rent[] {
    const rentsCopy = this.rents;
    for (let i = 0; i < rentsCopy.length - 1; i++) {
      let minorEl = i;
      for (let j = i + 1; j < rentsCopy.length; j++) {
        if (
          parseInt(rentsCopy[j].userId) < parseInt(rentsCopy[minorEl].userId)
        ) {
          minorEl = j;
        }
      }
      const changePosition = rentsCopy[minorEl];
      rentsCopy[minorEl] = rentsCopy[i];
      rentsCopy[i] = changePosition;
    }
    return rentsCopy;
  }
}
