import { ILibraryFacade } from "./ILFacade/ILFacade";
import { Book, BookService } from "./Books";
import { Rent, RentService } from "./Rent";
import { User, UserService } from "./Users";
import { TAddBookParams } from "Books/BookType";

export class Facade implements ILibraryFacade {
  addBookToCatalog(bookParams: TAddBookParams): void {
    BookService.getInstance().add(bookParams);
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
  showRentPrice(bookId: string): number {
    return 0;
  }
  showBillingHistory(userId: string): string {
    return "OK";
  }
  pay(rentId: string): void {}
}
