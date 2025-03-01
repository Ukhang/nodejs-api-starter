import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  getAllUsers(req: Request, res: Response) {
    const users = UserService.getAllUsers();
    res.json(users);
  }

  createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const newUser = UserService.createUser(name, email);
    res.status(201).json(newUser);
  }
}

export default new UserController();
