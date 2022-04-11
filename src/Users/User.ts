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
  sortUsers(): User[] {
    const usersCopy = this.users;
    for (let i = 0; i < usersCopy.length - 1; i++) {
      let minorEl = i;
      for (let j = i + 1; j < usersCopy.length; j++) {
        if (parseInt(usersCopy[j].id) < parseInt(usersCopy[minorEl].id)) {
          minorEl = j;
        }
      }
      const changePosition = usersCopy[minorEl];
      usersCopy[minorEl] = usersCopy[i];
      usersCopy[i] = changePosition;
    }
    return usersCopy;
  }
}
