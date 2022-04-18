const LIMITCHARACTERS = 100;
const LIMITTYPECHARACTERS = 35;

export class Book {
  id: string;
  title: string;
  type: string;
  constructor(id: string, title: string, type: string) {
    if (title.length >= LIMITCHARACTERS) {
      throw new Error(
        `Title must be less than ${LIMITCHARACTERS} characters! Limit exceeded!`
      );
    } else if (!title) {
      throw new Error(`Title not found. You must provide a valid title!`);
    } else if (!type) {
      throw new Error(`Type not found. You must provide a valid type!`);
    }
    this.id = id;
    this.title = title;
    this.type = type;
  }
  setTitleType(newTitle: string, newType: string): void {
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
    this.type = newType;
  }
}
