import { TBookType } from "Books/BookType";
import { User } from "Users";
import { UserService } from "Users";
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
    const {
      userId,
      userName,
      bookId,
      bookType,
      bookTitle,
      bookYear,
      bookPages,
      upto,
      rentPrice,
      paymentStatus,
    } = rentParams;
    try {
      const rentBook = new Rent(
        Math.trunc(Math.random() * 50 + 1).toString(),
        userId,
        userName,
        bookId,
        bookType,
        bookTitle,
        bookYear,
        bookPages,
        upto,
        rentPrice,
        paymentStatus
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

  showRentPrice(bookId: string) {}

  showBillings(userId: string) {}

  pay(rentId: string): void {
    const payRent = this.rents.forEach((rent) => {
      if (rent.rentId === rentId) {
        rent.paymentStatus = true;
      } else {
        rent.paymentStatus = false;
      }
      return;
    });
  }
}
