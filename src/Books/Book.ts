import { TBookType } from "./BookType";

const LIMITCHARACTERS = 100;

export class Book {
  id: string;
  type: TBookType;
  title: string;
  pages: number;
  year: string;
  constructor(
    id: string,
    type: TBookType,
    title: string,
    pages: number,
    year: string
  ) {
    if (title.length >= LIMITCHARACTERS) {
      throw new Error(
        `Title must be less than ${LIMITCHARACTERS} characters! Limit exceeded!`
      );
    } else if (!title) {
      throw new Error(`Title not found. You must provide a valid title!`);
    }
    this.id = id;
    this.type = type;
    this.title = title;
    this.pages = pages;
    this.year = year;
  }
  setTitle(newTitle: string): void {
    if (newTitle.length >= LIMITCHARACTERS) {
      throw new Error(
        `Title must be less than ${LIMITCHARACTERS} characters! Limit exceeded!`
      );
    } else if (!newTitle) {
      throw new Error(
        `Cannot edit, title not found. You must provide a valid title!`
      );
    }
    this.title = newTitle;
  }
}
