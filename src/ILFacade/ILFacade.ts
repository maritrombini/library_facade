import { Book, Rent } from "Books/Book";
import { User } from "Users/User";

export interface ILibraryFacade {
  /*
      Método utilizado para adicionar um livro ao catálogo da biblioteca
        - O 'title' deve ser menor que 100 caracteres
        - O 'title' não pode ser vazio ou nulo
    */
  addBookToCatalog(title: string): void;

  /*
      Método utilizado para editar o título de um livro do catálogo da biblioteca
        - O 'title' deve ser menor que 100 caracteres
        - O 'title' não pode ser vazio ou nulo
        - O 'id' do livro deve estar presente no catálogo
    */
  editBookInCatalog(bookId: string, newTitle: string): void;

  /*
      Método utilizado para mostrar todos os livros cadastrados no catálogo
    */
  showAllBooksInCatalog(): Book[];

  // Método utilizado para ordenar os livros
  findSortedBooks(): Book[];

  /*
      Método utilizado para cadastrar um usuário
        - O 'fullName' deve ter mais de uma palavra (você pode identificar isso checando se há um espaço entre as palavras)
        - O 'fullName' não pode ser vazio ou nulo
        - O 'address' não pode ser vazio ou nulo
    */

  signupUser(fullName: string, address: string): void;

  // Método utilizado para ordenar os usuários
  findSortedUsers(): User[];

  /*
      Método utilizado para que o cliente com id 'userId' alugue
      o livro com id 'bookId' até a data descrita em 'upto'.
        - O 'userId' deve ser um cliente da biblioteca
        - O 'bookId' deve ser um livro do catálogo
    
      Obs.: O formato da data 'upto' é ser: 'YYYY/MM/DD', não precisa
      validar essa data, assuma que ela sempre será dada corretamente
    */

  rent(
    userId: string,
    userName: string,
    bookId: string,
    bookTitle: string,
    upto: string
  ): void;

  /*
      Método utilizado para mostrar todos os aluguéis de
      livros até o momento.
   */
  showAllRentings(): Rent[];

  // Método utilizado para ordenar os empréstimos
  findSortedRents(): Rent[];
}
