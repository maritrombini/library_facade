import { Facade } from "./Facade";

const book1 = "Clean Code";
const book2 = "Mastering APIs";
const book3 = "React Fundamentals";
const changedBook = "Troll-Oriented Programming";

console.log(book1);

const user1 = {
  name: "Mari Trombini",
  address: "Jr Street",
};
console.log(user1);

const user2 = {
  name: "Wes Silva",
  address: "Sr Road",
};

const user3 = {
  name: "Vini Yamaha",
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

console.log(
  "\n +--- Show All Books in Catalog After Edit Method ---+ \n",
  facade.showAllBooksInCatalog()
);

//SIGNUP USER
facade.signupUser(user1.name, user1.address);
facade.signupUser(user2.name, user2.address);
facade.signupUser(user3.name, user3.address);

//SHOW ALL USERS

const userId = facade.showAllUsers()[0].id;
const userId2 = facade.showAllUsers()[1].id;
const userId3 = facade.showAllUsers()[2].id;

console.log("\n +--- Show All Users ---+ \n", facade.showAllUsers());

//SHOW SORTED USERS
console.log("\n +--- Show Sorted Users ---+ \n", facade.findSortedUsers());

const rent1 = {
  userId: userId,
  bookId: bookId,
  upto: "2022/05/13'",
};

const rent2 = {
  userId: userId2,
  bookId: bookId2,
  upto: "2022/04/24'",
};

const rent3 = {
  userId: userId3,
  bookId: bookId3,
  upto: "2022/06/30'",
};

//RENT
facade.rent(rent1.userId, rent1.bookId, rent1.upto);

facade.rent(rent2.userId, rent2.bookId, rent2.upto);

facade.rent(rent3.userId, rent3.bookId, rent3.upto);

//SHOW ALL RENTINGS
console.log("\n +--- Show All Rentings ---+ \n", facade.showAllRentings());

//SHOW SORTED RENTINGS
console.log("\n +--- Show Sorted Rentings ---+ \n", facade.findSortedRents());
