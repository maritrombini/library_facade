import { Facade } from "./Facade";

const book1 = "Dracula";
const book2 = "Mindset";
const changedBook = "Estação Carandiru";

const user1 = {
  name: "Mari Trombini",
  address: "Castelo Branco Street",
};

//ADD BOOK
const facade = new Facade();
facade.addBookToCatalog(book1);
facade.addBookToCatalog(book2);

//const userId = facade.showAllUsers()[0].id;
//console.log(userId);

//SHOW ALL BOOKS
console.log(
  "\n +--- Show All Books in Catalog ---+ \n",
  facade.showAllBooksInCatalog()
);

//EDIT BOOK IN CATALOG
const bookId = facade.showAllBooksInCatalog()[0].id;
facade.editBookInCatalog(bookId, changedBook);

console.log(
  "\n +--- Show All Books in Catalog After Edit Method ---+ \n",
  facade.showAllBooksInCatalog()
);

//--------------------
/*const rent1 = {
  userId: userId,
  bookId: bookId,
  upto: "2022/13/05'",
};
*/

//facade.rent(rent1.userId, rent1.bookId, rent1.upto);
//console.log(
// "\n +--- Show All Books in Catalog ---+ \n",
// facade.showAllRentings()
//);

//-------------------

//SIGNUP USER
facade.signupUser(user1.name, user1.address);

//SHOW ALL USERS
console.log("\n +--- Show All Users ---+ \n", facade.showAllUsers());
