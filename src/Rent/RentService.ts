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
      rentDate,
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
        paymentStatus,
        rentDate
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

  showRentPrice(bookId: string) {
    let calculation = 0;
    const pricedRent = this.rents.forEach((rent) => {
      if (rent.bookId === bookId) {
        if (rent.bookType === "Lançamento") {
          rent.rentPrice = 0.05;
          calculation = rent.rentPrice * rent.bookPages;
          rent.rentPrice = parseFloat(calculation.toFixed(2));
          return calculation;
        } else if (rent.bookType === "Antigo") {
          rent.rentPrice = 5.0;
          rent.bookYear = 2008;
          calculation = rent.rentPrice + rent.bookYear / 100;
          rent.rentPrice = parseFloat(calculation.toFixed(2));
          return calculation;
        } else if (rent.bookType === "Premium") {
          rent.rentPrice = 40;
          calculation = rent.rentPrice;
          rent.rentPrice = parseFloat(calculation.toFixed(2));
          return calculation;
        }
        return pricedRent;
      }
    });
    try {
      return calculation;
    } catch (error) {
      throw new Error(`BookService: ${error}`);
    }
  }

  showBillings(userId: string) {
    this.rents.sort((a, b) => (a.rentDate > b.rentDate ? -1 : 1));

    console.log("\n +--- Show Billing History ---+ \n");

    const pricedRent = this.rents.find((rent) => {
      if (rent.userId === userId) {
        console.log(`\nUsuário: ${rent.userName} | Ação: Ver Conta\n`);
        return rent.userName;
      }

      return;
    });

    const userRent = this.rents.forEach((rent) => {
      if (rent.userId === userId) {
        let status = rent.paymentStatus;
        if (status === false) {
          status = "A Pagar";
        } else {
          status = "Pago";
        }

        if (rent.userId === userId) {
          console.log(
            `*${rent.bookTitle} | ${rent.rentPrice} | ${status}\nDate: ${rent.rentDate}\n`
          );
        }

        if (status === "Pago") {
          rent.rentPrice = 0;
        }
        return status;
      }

      return;
    });

    const rentReports = this.rents.map((rent) => {
      if (rent.userId === userId) {
        return rent.rentPrice;
      }
    });

    let validRents = rentReports.filter(function (validValues) {
      return validValues;
    });

    const userRentHistory = validRents.reduce((total, value) => {
      return total + value;
    });

    console.log(`\nTotal a pagar: R$ ${userRentHistory}\n`);
  }
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
