import { Book } from "Books/Book";
import { Rent } from "Rent/Rent";
import { User } from "Users/User";

export interface ILibraryFacade {
  /*
      Método utilizado para adicionar um livro ao catálogo da biblioteca
        - O 'title' deve ser menor que 100 caracteres
        - O 'title' não pode ser vazio ou nulo
    */
  addBookToCatalog(title: string, type: string): void;

  /*
      Método utilizado para editar o título de um livro do catálogo da biblioteca
        - O 'title' deve ser menor que 100 caracteres
        - O 'title' não pode ser vazio ou nulo
        - O 'id' do livro deve estar presente no catálogo
    */
  editBookInCatalog(bookId: string, newTitle: string, newType: string): void;

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
    bookType: string,
    upto: string
  ): void;

  /*
      Método utilizado para mostrar todos os aluguéis de
      livros até o momento.
   */
  showAllRentings(): Rent[];

  // Método utilizado para ordenar os empréstimos
  findSortedRents(): Rent[];

  /*
  Método utilizado para mostrar o preço do aluguel do livro 'bookId'
  do catálogo.
 
   - O 'id' do livro deve estar presente no catálogo
 
  Sobre o cálculo:
 
  O cálculo do preço do livro é baseado no tipo de livro.
  Cada livro tem um tipo que pode ser: 'Lançamento', 'Antigo' ou 'Premium'.
 
  O cálculo dos lançamentos é o seguinte:
       valor do aluguel em R$ = 0,05 * Número de Páginas
 
  O cálculo dos antigos:

 valor do aluguel em R$ = 5,00 + Ano do Livro / 100
 
  O cálculo dos premiums:
       Valor fixo de 40,00
*/

  showRentPrice(bookId: string): number;

  /*
   Método utilizado para mostrar a conta para um cliente.
       - O 'id' do usuário deve estar presente no catálogo
  
   Deve mostrar um output semelhante a:
       Usuário: Wesley | Ação: Ver conta
 
       Total a pagar: R$ 71,23
 
       Aluguéis:
       1. Nome do livro | R$ 40,00 | A pagar
       2. Nome do livro 2 | R$ 31,23 | A pagar
       3. Nome do livro 3 | R$ 40,00 | Pago
 
   A listagem deve ser do aluguel mais recente para o aluguel mais antigo
 */
  showBillingHistory(userId: string): string;

  /*
   Método utilizado para que um cliente pague um aluguel.
       - O 'id' do aluguel deve existir
 */
  pay(rentId: string): void;
}
