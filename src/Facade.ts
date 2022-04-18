import { ILibraryFacade } from "./ILFacade/ILFacade";
import { Book } from "./Books/Book";
import { User } from "./Users/User";
import { BookService } from "../src/Books/BookService";
import { Rent } from "Rent/Rent";
import { RentService } from "../src/Rent/RentService";
import { UserService } from "../src/Users/UserService";

export class Facade implements ILibraryFacade {
  addBookToCatalog(title: string): void {
    BookService.getInstance().add(title);
  }
  editBookInCatalog(bookId: string, newTitle: string): void {
    BookService.getInstance().edit(bookId, newTitle);
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
    upto: string
  ): void {
    RentService.getInstance().rent(userId, userName, bookId, bookTitle, upto);
  }
  showAllRentings(): Rent[] {
    return RentService.getInstance().showRentings();
  }
  findSortedRents(): Rent[] {
    return RentService.getInstance().showSortedRentings();
  }
}
