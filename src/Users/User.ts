export class User {
  id: string;
  fullName: string;
  address: string;
  constructor(id: string, fullName: string, address: string) {
    this.id = id;
    this.fullName = fullName;
    this.address = address;
  }
}

export class UserService {
  users: User[] = [];
  signup(fullName: string, address: string) {
    try {
      const user = new User(
        Math.trunc(Math.random() * 50 + 1).toString(),
        fullName,
        address
      );
      this.users.push(user);
      return user;
    } catch (error) {
      throw new Error(`UserService: ${error}`);
    }
  }
  showAllUsers(): User[] {
    return this.users;
  }
}
