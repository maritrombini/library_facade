import { TAddBookParams } from "Books/BookType";
import { TRentParams } from "Rent/RentType";
import { Facade } from "./Facade";

const book1: TAddBookParams = {
  type: "Antigo",
  title: "Clean Code",
  pages: 431,
  year: "2008",
  rentPrice: 5.0,
};

const book2: TAddBookParams = {
  type: "Lançamento",
  title: "Mastering APIs",
  pages: 560,
  year: "2022",
  rentPrice: 0.05,
};

const book3: TAddBookParams = {
  type: "Premium",
  title: "React Fundamentals",
  pages: 1000,
  year: "2020",
  rentPrice: 40.0,
};

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
  fullName: "Vini Yamaya",
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

const bookType = facade.showAllBooksInCatalog()[0].type;
const bookType2 = facade.showAllBooksInCatalog()[1].type;
const bookType3 = facade.showAllBooksInCatalog()[2].type;

const bookPages = facade.showAllBooksInCatalog()[0].pages;
const bookPages2 = facade.showAllBooksInCatalog()[1].pages;
const bookPages3 = facade.showAllBooksInCatalog()[2].pages;

const bookYear = parseInt(facade.showAllBooksInCatalog()[0].year);
const bookYear2 = parseInt(facade.showAllBooksInCatalog()[1].year);
const bookYear3 = parseInt(facade.showAllBooksInCatalog()[2].year);

const rentPrice = facade.showAllBooksInCatalog()[0].rentPrice;
const rentPrice2 = facade.showAllBooksInCatalog()[1].rentPrice;
const rentPrice3 = facade.showAllBooksInCatalog()[2].rentPrice;

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

const paymentStatus = false;

const rent1: TRentParams = {
  userId: userId,
  userName: user1.fullName,
  bookId: bookId,
  bookType: bookType,
  bookTitle: bookTitle,
  bookYear: bookYear,
  bookPages: bookPages,
  upto: "2022/05/12",
  rentPrice: rentPrice,
  paymentStatus: paymentStatus,
};

const rent2: TRentParams = {
  userId: userId2,
  userName: user2.fullName,
  bookId: bookId2,
  bookType: bookType2,
  bookTitle: bookTitle2,
  bookYear: bookYear2,
  bookPages: bookPages2,
  upto: "2022/08/04",
  rentPrice: rentPrice2,
  paymentStatus: paymentStatus,
};

const rent3: TRentParams = {
  userId: userId3,
  userName: user3.fullName,
  bookId: bookId3,
  bookType: bookType3,
  bookTitle: bookTitle3,
  bookYear: bookYear3,
  bookPages: bookPages3,
  upto: "2022/09/10",
  rentPrice: rentPrice3,
  paymentStatus: paymentStatus,
};

const rent4: TRentParams = {
  userId: userId3,
  userName: user3.fullName,
  bookId: bookId2,
  bookType: bookType2,
  bookTitle: bookTitle2,
  bookYear: bookYear2,
  bookPages: bookPages2,
  upto: "2022/12/19",
  rentPrice: rentPrice2,
  paymentStatus: paymentStatus,
};

const rent5: TRentParams = {
  userId: userId,
  userName: user1.fullName,
  bookId: bookId3,
  bookType: bookType3,
  bookTitle: bookTitle3,
  bookYear: bookYear3,
  bookPages: bookPages3,
  upto: "2022/10/08",
  rentPrice: rentPrice3,
  paymentStatus: paymentStatus,
};

const rent6: TRentParams = {
  userId: userId,
  userName: user1.fullName,
  bookId: bookId2,
  bookType: bookType2,
  bookTitle: bookTitle2,
  bookYear: bookYear2,
  bookPages: bookPages2,
  upto: "2022/11/01",
  rentPrice: rentPrice2,
  paymentStatus: paymentStatus,
};

//RENT

facade.rent(rent1);
facade.rent(rent2);
facade.rent(rent3);
facade.rent(rent4);
facade.rent(rent5);
facade.rent(rent6);

facade.showRentPrice(bookId);
facade.showRentPrice(bookId2);
facade.showRentPrice(bookId3);
facade.showRentPrice(bookId2);
facade.showRentPrice(bookId3);
facade.showRentPrice(bookId2);

const rentId = facade.showAllRentings()[0].rentId;
const rentId2 = facade.showAllRentings()[1].rentId;
const rentId3 = facade.showAllRentings()[2].rentId;

//SHOW ALL RENTINGS
console.log("\n +--- Show All Rentings ---+ \n", facade.showAllRentings());

//SHOW BILLINGS

const billingUser = facade.showAllRentings()[0].userId;
const billingUser2 = facade.showAllRentings()[1].userId;
const billingUser3 = facade.showAllRentings()[2].userId;

//PAY
facade.pay(rentId);

//SHOW BILLING HISTORY
facade.showBillingHistory(userId);
facade.showBillingHistory(userId2);
facade.showBillingHistory(userId3);

console.log(
  "\n +--- Show Rentings After Pay Method---+ \n",
  facade.findSortedRents()
);

//SHOW SORTED RENTINGS
console.log("\n +--- Show Sorted Rentings ---+ \n", facade.findSortedRents());
