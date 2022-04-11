import { ILibraryFacade } from "./ILFacade/ILFacade";
import { Book, BookService, Rent, RentService } from "./Books/Book";
import { User, UserService } from "./Users/User";

export class Facade implements ILibraryFacade {
  bookService = new BookService();
  userService = new UserService();
  rentService = new RentService();

  addBookToCatalog(title: string): void {
    this.bookService.add(title);
  }
  editBookInCatalog(bookId: string, newTitle: string): void {
    this.bookService.edit(bookId, newTitle);
  }
  showAllBooksInCatalog(): Book[] {
    return this.bookService.showAll();
  }
  findSortedBooks(): Book[] {
    return this.bookService.sort();
  }
  signupUser(fullName: string, address: string): void {
    this.userService.signup(fullName, address);
  }
  showAllUsers(): User[] {
    return this.userService.showAllUsers();
  }
  findSortedUsers(): User[] {
    return this.userService.sortUsers();
  }
  rent(userId: string, bookId: string, upto: string): void {
    this.rentService.rent(userId, bookId, upto);
  }
  showAllRentings(): Rent[] {
    return this.rentService.showRentings();
  }
  findSortedRents(): Rent[] {
    return this.rentService.showSortedRentings();
  }
}
