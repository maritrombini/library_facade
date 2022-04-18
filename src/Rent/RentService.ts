import { TBookType } from "Books/BookType";
import { Rent } from "./Rent";
import { TRentParams } from "./RentType";

export class RentService {
  private static instance: RentService;
  rents: Rent[] = [];
  private constructor() {}
  static getInstance() {
    if (!RentService.instance) {
      RentService.instance = new RentService();
    }
    return RentService.instance;
  }
  rent(rentParams: TRentParams): Rent {
    const { userId, userName, bookId, bookType, bookTitle, upto } = rentParams;
    try {
      const rentBook = new Rent(
        userId,
        userName,
        bookId,
        bookType,
        bookTitle,
        upto
      );
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
  /*
  showRentPrice(bookId: string): number {
    /*
   let price: number = this.rents.forEach((rent) => {
      if (book.id === id) {
        book.setTitle(title);
      }
    })
   
    })
    return;
  }*/
}
