import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.createUser);

export default router;