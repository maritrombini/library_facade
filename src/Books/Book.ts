const LIMITCHARACTERS = 100;

export class Book {
  id: string;
  title: string;
  constructor(id: string, title: string) {
    if (title.length >= LIMITCHARACTERS) {
      throw new Error(
        `Title must be less than ${LIMITCHARACTERS} characters! Limit exceeded!`
      );
    } else if (!title) {
      throw new Error(`Title not found. You must provide a valid title!`);
    }
    this.id = id;
    this.title = title;
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
