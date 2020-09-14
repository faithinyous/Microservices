import { Router } from "express";
import Partner from "../controllers/partner";
const router: Router = Router();
router.post("/user", Partner.getAllData);

export default router;