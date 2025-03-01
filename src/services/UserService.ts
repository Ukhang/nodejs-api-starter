import User from "../models/User";

class UserService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(name: string, email: string): User {
    const newUser = new User(this.users.length + 1, name, email);
    this.users.push(newUser);
    return newUser;
  }
}

export default new UserService();