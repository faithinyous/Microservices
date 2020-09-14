import { Router } from "express";
import Partner from "../controllers/partner";

const router: Router = Router();
router.post("/get_car_data", Partner.getCarData);

export default router;