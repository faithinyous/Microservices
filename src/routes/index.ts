import { Router, response, request } from "express";
import express from "express";
//import data
const router: Router = Router();

//use data
// router.use("/site", Site);

function testResponse(request: express.Request, response: express.Response) {
  response.status(200).send({ success: true });
}
export default router;
