import Helper from "@/helpers/helper";
import express from "express";
import {cassandraExe} from "@/cassandra";

export default class Partner {
  //get car data for partner
  public static async getCarData(req: express.Request, res: express.Response){
    if (Helper.verifyRequestParams(['token','car_id'],req,res)) return;
    const partner_id = await Helper.verifyPartner(req);

    if(partner_id === -1) {res.gSendError("could not verify partner"); return}

    const query = `SELECT * FROM databaseTesla.car_info WHERE id = ?`
    await cassandraExe(query,[ req.body.car_id], (err: any, result: any) => {
      if (err) {
        console.log(err)
        res.gSendError("could not find the car selected")
        return;
      }
     res.gSendSuccess(result.rows)
    });


  }







}