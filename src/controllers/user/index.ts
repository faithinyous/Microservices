import Helper from "@/helpers/helper";
import express from "express";
import {cassandraExe} from "@/cassandra";
export default class User {
  //get summary data for dashboard?
  public static async getAllData(req: express.Request, res: express.Response) {
    //check cookie and session

    //select data where this user added the car in
    let carData = {id:1,name:'blabla'}
    res.gSendSuccess({payload: carData})
  }
  public static async getCarLog(req: express.Request, res: express.Response) {
    if (Helper.verifyRequestParams(['car_id','timestart','timeend'],req,res)) return;

    //check cookie and session

    //select logs where user selected
    const query = `SELECT * FROM databaseTesla.car_logs WHERE car_id=? AND timestamp <? and timestamp > ?`
    await cassandraExe(query,[ req.body.car_id,req.body.timestart,req.body.timeend], (err: any, result: any) => {
      if (err) {
        console.log(err)
        res.gSendError("could not find the car selected")
        return;
      }
      res.gSendSuccess(result.rows)
    });
    // let logData = [{id:'5b6962dd-3f90-4c93-8f61-eabfa4a803e2',
    //   timestamp:'2019-01-01 00:00:00z',long: 13.123213,lat: 41.2412412,etc: 'etc'}]
    // res.gSendSuccess({payload: logData})
  }


  public static async allowPartner(req: express.Request, res: express.Response) {
    if (Helper.verifyRequestParams(['car_id','partner_id'],req,res)) return;
      //check cookie and session
      //insert data to data base
    res.gSendSuccess()
  }


}