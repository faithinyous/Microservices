import Helper from "@/helpers/helper";
import express from "express";
export default class User {
  public static async getAllData(req: express.Request, res: express.Response) {
    //check cookie and session

    //select data where this user added the car in
    let carData = {id:1,name:'blabla'}
    res.gSendSuccess({payload: carData})
  }
  public static async getCarLog(req: express.Request, res: express.Response) {
    //check cookie and session

    //select logs where user selected


    let logData = [{id:1,timestamp:'2019-01-01',name:'blabla'}]
    res.gSendSuccess({payload: logData})
  }


  public static async allowPartner(req: express.Request, res: express.Response) {
    if (Helper.verifyRequestParams(['car_id','partner_id'],req,res)) return;
      //check cookie and session
      //insert data to data base
    res.gSendSuccess()
  }


}