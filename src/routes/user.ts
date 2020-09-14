import { Router } from "express";
import User from "../controllers/user";
const router: Router = Router();
router.post("/get_add_data", User.getAllData);
router.post("/get_car_log", User.getCarLog);
router.post("/allow_partner", User.allowPartner);

export default router;