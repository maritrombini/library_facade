import { Rent } from "Rent";

export class User {
  id: string;
  fullName: string;
  address: string;

  constructor(id: string, fullName: string, address: string) {
    const checkSpace = (fullName: string) => /(\w+)\s+(\w+)/.test(fullName);
    if (!fullName) {
      throw new Error(
        `You must provide a valid name! Insert name and lastname!`
      );
    } else if (!checkSpace(fullName)) {
      throw new Error(
        `You must provide a valid name! Insert name and lastname!`
      );
    } else if (!address) {
      throw new Error(`You must provide a valid addres! Insert address!`);
    } else if (!checkSpace(address)) {
      throw new Error(`You must provide a valid address!`);
    }
    this.id = id;
    this.fullName = fullName;
    this.address = address;
  }
}
