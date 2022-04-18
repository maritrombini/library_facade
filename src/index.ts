import { BookService } from "Books/BookService";
import { Facade } from "./Facade";

const book1 = {
  title: "",
  type: "",
};

const book2 = {
  title: "",
  type: "",
};

const book3 = {
  title: "",
  type: "",
};

const changedBook = {
  title: "Troll-Oriented Programming",
  type: "Lançamento",
};

const user1 = {
  fullName: "Mari Trombini",
  address: "Jr Street",
};

const user2 = {
  fullName: "Wes Silva",
  address: "Sr Road",
};

const user3 = {
  fullName: "Vini Yamaya",
  address: "Jr Avenue",
};

//ADD BOOK
const facade = new Facade();
facade.addBookToCatalog((book1.title = "Clean Code"), (book1.type = "Antigo"));
facade.addBookToCatalog(
  (book2.title = "Mastering APIs"),
  (book2.type = "Lançamento")
);
facade.addBookToCatalog(
  (book3.title = "React Fundamentals"),
  (book3.type = "Premium")
);

//SHOW ALL BOOKS
console.log(
  "\n +--- Show All Books in Catalog ---+ \n",
  facade.showAllBooksInCatalog()
);

//SHOW SORTED BOOKS
console.log("\n +--- Show Sorted Books ---+ \n", facade.findSortedBooks());

//EDIT BOOK IN CATALOG
const bookId = facade.showAllBooksInCatalog()[0].id;
const bookId2 = facade.showAllBooksInCatalog()[1].id;
const bookId3 = facade.showAllBooksInCatalog()[2].id;

const bookTitle = facade.showAllBooksInCatalog()[0].title;
const bookTitle2 = facade.showAllBooksInCatalog()[1].title;
const bookTitle3 = facade.showAllBooksInCatalog()[2].title;

const bookType = facade.showAllBooksInCatalog()[0].type;
const bookType2 = facade.showAllBooksInCatalog()[1].type;
const bookType3 = facade.showAllBooksInCatalog()[2].type;

facade.editBookInCatalog(bookId, changedBook.title, changedBook.type);
console.log(
  "\n +--- Show All Books in Catalog after Edit Title and Type ---+ \n",
  facade.showAllBooksInCatalog()
);

//SIGNUP USER
facade.signupUser(user1.fullName, user1.address);
facade.signupUser(user2.fullName, user2.address);
facade.signupUser(user3.fullName, user3.address);

//SHOW ALL USERS

const userId = facade.showAllUsers()[0].id;
const userId2 = facade.showAllUsers()[1].id;
const userId3 = facade.showAllUsers()[2].id;

console.log("\n +--- Show All Users ---+ \n", facade.showAllUsers());

//SHOW SORTED USERS
console.log("\n +--- Show Sorted Users ---+ \n", facade.findSortedUsers());

const rent1 = {
  userId: userId,
  userName: user1.fullName,
  bookId: bookId,
  bookTitle: changedBook.title,
  bookType: changedBook.type,
  upto: "2022/05/13'",
};

const rent2 = {
  userId: userId2,
  userName: user2.fullName,
  bookId: bookId2,
  bookTitle: bookTitle2,
  bookType: bookType2,
  upto: "2022/04/24'",
};

const rent3 = {
  userId: userId3,
  userName: user3.fullName,
  bookId: bookId3,
  bookTitle: bookTitle3,
  bookType: bookType3,
  upto: "2022/06/30'",
};

//RENT
facade.rent(
  rent1.userId,
  rent1.userName,
  rent1.bookId,
  rent1.bookTitle,
  rent1.bookType,
  rent1.upto
);

facade.rent(
  rent2.userId,
  rent2.userName,
  rent2.bookId,
  rent2.bookTitle,
  rent2.bookType,
  rent2.upto
);

facade.rent(
  rent3.userId,
  rent3.userName,
  rent3.bookId,
  rent3.bookTitle,
  rent3.bookType,
  rent3.upto
);

//SHOW ALL RENTINGS
console.log("\n +--- Show All Rentings ---+ \n", facade.showAllRentings());

//SHOW SORTED RENTINGS
console.log("\n +--- Show Sorted Rentings ---+ \n", facade.findSortedRents());
