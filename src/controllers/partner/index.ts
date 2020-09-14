import Helper from "@/helpers/helper";
import express from "express";

export default class Partner {
  //get car data for partner
  public static async getCarData(req: express.Request, res: express.Response){
    if (Helper.verifyRequestParams(['token','car_id','partner_id'],req,res)) return;

  }





}