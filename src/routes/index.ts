import { Router, response, request } from "express";
import express from "express";
import Partner from "./partner";
import User from "./user";
//import data
const router: Router = Router();

//use data
router.use("/partner", Partner);
router.use("/user", User);

function testResponse(request: express.Request, response: express.Response) {
  response.status(200).send({ success: true });
}
export default router;
