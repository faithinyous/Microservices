import { Router } from "express";
import User from "../controllers/user";
const router: Router = Router();
router.post("/user", User.getAllData);

export default router;