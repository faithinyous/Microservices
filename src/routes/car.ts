import { Router } from "express";
import Car from "../controllers/car";
const router: Router = Router();
router.post("/insert_log", Car.insertLog);

export default router;