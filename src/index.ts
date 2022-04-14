import { Facade } from "./Facade";

const book1 = "Clean Code";
const book2 = "Mastering APIs";
const book3 = "React Fundamentals";
const changedBook = "Troll-Oriented Programming";

const user1 = {
  fullName: "Mari Trombini",
  address: "Jr Street",
};

const user2 = {
  fullName: "Wes Silva",
  address: "Sr Road",
};

const user3 = {
  fullName: "Vini Yamaha",
  address: "Jr Avenue",
};

//ADD BOOK
const facade = new Facade();
facade.addBookToCatalog(book1);
facade.addBookToCatalog(book2);
facade.addBookToCatalog(book3);

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
facade.editBookInCatalog(bookId, changedBook);

const bookTitle = facade.showAllBooksInCatalog()[0].title;
const bookTitle2 = facade.showAllBooksInCatalog()[1].title;
const bookTitle3 = facade.showAllBooksInCatalog()[2].title;

console.log(
  "\n +--- Show All Books in Catalog After Edit Method ---+ \n",
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
  bookTitle: bookTitle,
  upto: "2022/05/13'",
};

const rent2 = {
  userId: userId2,
  userName: user2.fullName,
  bookId: bookId2,
  bookTitle: bookTitle2,
  upto: "2022/04/24'",
};

const rent3 = {
  userId: userId3,
  userName: user3.fullName,
  bookId: bookId3,
  bookTitle: bookTitle3,
  upto: "2022/06/30'",
};

//RENT
facade.rent(
  rent1.userId,
  rent1.userName,
  rent1.bookId,
  rent1.bookTitle,
  rent1.upto
);

facade.rent(
  rent2.userId,
  rent2.userName,
  rent2.bookId,
  rent2.bookTitle,
  rent2.upto
);

facade.rent(
  rent3.userId,
  rent3.userName,
  rent3.bookId,
  rent3.bookTitle,
  rent3.upto
);

//SHOW ALL RENTINGS
console.log("\n +--- Show All Rentings ---+ \n", facade.showAllRentings());

//SHOW SORTED RENTINGS
console.log("\n +--- Show Sorted Rentings ---+ \n", facade.findSortedRents());
