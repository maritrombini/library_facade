import { ILibraryFacade } from "./ILFacade/ILFacade";
import { Book } from "./Books/Book";
import { User } from "./Users/User";
import { BookService } from "../src/Books/BookService";
import { Rent } from "Rent/Rent";
import { RentService } from "../src/Rent/RentService";
import { UserService } from "../src/Users/UserService";

export class Facade implements ILibraryFacade {
  addBookToCatalog(title: string, type: string): void {
    BookService.getInstance().add(title, type);
  }
  editBookInCatalog(bookId: string, newTitle: string, newType: string): void {
    BookService.getInstance().edit(bookId, newTitle, newType);
  }

  showAllBooksInCatalog(): Book[] {
    return BookService.getInstance().showAll();
  }
  findSortedBooks(): Book[] {
    return BookService.getInstance().sort();
  }
  signupUser(fullName: string, address: string): void {
    UserService.getInstance().signup(fullName, address);
  }
  showAllUsers(): User[] {
    return UserService.getInstance().showAllUsers();
  }
  findSortedUsers(): User[] {
    return UserService.getInstance().sortUsers();
  }
  rent(
    userId: string,
    userName: string,
    bookId: string,
    bookTitle: string,
    bookType: string,
    upto: string
  ): void {
    RentService.getInstance().rent(
      userId,
      userName,
      bookId,
      bookTitle,
      bookType,
      upto
    );
  }
  showAllRentings(): Rent[] {
    return RentService.getInstance().showRentings();
  }
  findSortedRents(): Rent[] {
    return RentService.getInstance().showSortedRentings();
  }
  showRentPrice(bookId: string): number {
    // return RentService.getInstance().showRentPrice();
    return 0;
  }
  showBillingHistory(userId: string): string {
    return "method doest exists";

    // return RentService.getInstance().showBillingHistory();
  }
  pay(rentId: string): void {
    //  RentService.getInstance().pay();
  }
}
